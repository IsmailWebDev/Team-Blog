import { fetchPost } from "@/app/api/services/Post";
import { fetchUser } from "@/app/api/services/User";
import PostClient from "@/app/components/ui/PostClient";
import { getAuthToken } from "@/app/hooks/getAuthToken";
import { User } from "@/app/interfaces/users.interface";
interface PostProps {
  params: {
    id: number;
  };
}

export default async function PostPage({ params }: PostProps) {
  const token = await getAuthToken();
  let userId: number;
  let userData: User | undefined;

  if (token) {
    const parts = token.split(".");
    const payload = parts[1];
    const decodedPayload = atob(payload);
    const parsedPayload = JSON.parse(decodedPayload);
    userId = parsedPayload.id;
    userData = await fetchUser(userId);
  }

  return <PostClient postId={params.id} user={userData} />;
}
