import type { Metadata, Viewport } from "next";
import Providers from "@/redux/Provider";
import { store } from "../redux/store";
import ReactQueryProvider from "@/lib/react-query/ReactQueryProvider";
import { NextAuthProvider } from "./(main)/components/NextAuthProvider";
import { Toaster } from 'react-hot-toast';

import "./globals.css";

export const metadata: Metadata = {
	title: {
		default: "TaskNest",
		template: "%s | Tasknest",
	},
	description:
		"TaskNest is a service focusing on advertising and commissioning.",
	authors: {
		name: "LigmaTeam",
		url: "https://github.com/MFavianZaahir/mv-project",
	},
	creator: "LigmaTeam",
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body>
				<NextAuthProvider>
					<Providers store={store}>
						<ReactQueryProvider>{children}</ReactQueryProvider>
						<Toaster
						position="top-center"
						reverseOrder={false}
						/>
					</Providers>
				</NextAuthProvider>
			</body>
		</html>
	);
}
