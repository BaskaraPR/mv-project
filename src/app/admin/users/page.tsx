// src/app/admin/users/page.tsx
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

interface User {
  id: string;
  email: string;
  username: string;
}

export default async function UsersPage() {
  try {

    const  data  = await directus.request(readItems("user_kel_bagas"));

    return (
      <div>
        <h1>Users</h1>
        {data && data.length > 0 ? (
          <ul>
            {data.map((user: User) => (
              <li key={user.id}>
                <p>Name: {user.username}</p>
                <p>Email: {user.email}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found</p>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error fetching data from Directus:", error);
    return <div>Error loading users</div>;
  }
}
