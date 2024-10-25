// src/app/admin/users/page.tsx
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

interface Tags {
  id: string;
  tags: string;
}

export default async function UsersPage() {
  try {
    const data = await directus.request<Tags[]>(readItems("company_tags"));

    return (
      <div>
        <h1>Tags</h1>
        {data && data.length > 0 ? (
          <ul>
            {data.map((tags: Tags) => (
              <li key={tags.id}>
                <p>Tags: {tags.tags}</p>
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
