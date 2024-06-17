import { cookies } from "next/headers";

export async function getAuthToken() {
  const authToken = cookies().get("Authorization")?.value;
  return authToken;
}
