import { redirect } from "next/navigation";
import { fetchUser } from "@/app/api/services/User";
import { getAuthToken } from "@/app/hooks/getAuthToken";
import CreatePostForm from "@/app/components/ui/CreatePostForm";

export default async function Dashboard() {
  const token = await getAuthToken();
  if (!token) {
    redirect("/login");
  }

  const parts = token.split(".");
  const payload = parts[1];
  const decodedPayload = atob(payload);
  const parsedPayload = JSON.parse(decodedPayload);
  const userId = parsedPayload.id;

  const user = await fetchUser(userId);

  return (
    <main className="container mx-auto">
      <CreatePostForm />
    </main>
  );
}
