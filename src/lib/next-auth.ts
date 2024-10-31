import { AuthOptions, getServerSession } from "next-auth";
import { findUserByEmail } from "@/app/services/user";
import { compareHash } from "@/app/helper/bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
	interface Session {
		user?: {
			id: string;
			email: string;
			name: string;
			image: string;
			gender: string;
		};
	}
}

export const authOptions: AuthOptions = {
	session: {
		strategy: "jwt",
	},
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: {
					label: "email",
					type: "text",
					placeholder: "put the gyatt down",
				},
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				try {
					if (!credentials) return null;
					const user = await findUserByEmail(credentials.email);

					if (!user) {
						return null;
					}

					const comparePassword = await compareHash(
						credentials!.password!,
						user.password!
					);
					if (!comparePassword) return null;

					const payload = {
						id: user.id,
						username: user.username,
						email: user.email,
					};

					return payload;
				} catch (error) {
					throw new Error(`Error fetching data from Directus: ${error}`);
				}
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user?.email) {
				const userdb = await findUserByEmail(user.email);
				if (!userdb) return token;
				token.sub = userdb.id;
				token.username = userdb.username;
				token.email = userdb.email;
			}
			return token;
		},

		async session({ session, token }) {
			if (session.user && token.email) {
				const userdb = await findUserByEmail(token.email);
				session.user.id = userdb.id;
				session.user.name = userdb.username;
				session.user.email = userdb.email;
				session.user.image = userdb.profile_picture;
				session.user.gender = userdb.gender;
			}

			return session;
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: "/auth/login",
	},
};

export const nextGetServerSession = () => getServerSession(authOptions);
