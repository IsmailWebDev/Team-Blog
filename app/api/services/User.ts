import { User } from "@/app/interfaces/users.interface";

export async function fetchUser(userId: number): Promise<User> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`);
  const { data } = await res.json();
  return data;
}
export async function updateUser(
  userId: number,
  formData: FormData,
): Promise<User> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`,
    {
      method: "PATCH",
      body: formData,
      credentials: "include",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to update user information");
  }

  return response.json();
}
