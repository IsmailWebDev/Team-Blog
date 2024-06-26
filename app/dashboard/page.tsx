import { redirect } from "next/navigation";
import { fetchUser } from "@/app/api/services/User";
import UpdateUserForm from "../components/ui/UpdateUserForm";
import { getAuthToken } from "../hooks/getAuthToken";

export default async function Dashboard() {
  const token = await getAuthToken();
  if (!token) {
    redirect("/register");
  }

  const parts = token.split(".");
  const payload = parts[1];
  const decodedPayload = atob(payload);
  const parsedPayload = JSON.parse(decodedPayload);
  const userId = parsedPayload.id;

  const user = await fetchUser(userId);
  if (!user) {
    redirect("/register");
  }
  return (
    <main className="container mx-auto">
      <h1 className="mb-4 text-2xl font-bold">User Dashboard</h1>
      <UpdateUserForm user={user} />
    </main>
  );
}
