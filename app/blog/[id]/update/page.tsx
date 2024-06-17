import { fetchPost } from "@/app/api/services/Post";
import { redirect } from "next/navigation";
import UpdatePostForm from "@/app/components/ui/UpdatePostForm";
import { getAuthToken } from "@/app/hooks/getAuthToken";
interface UpdatePostPageProps {
  params: {
    id: string;
  };
}

export default async function UpdatePostPage({ params }: UpdatePostPageProps) {
  const postId = parseInt(params.id);
  const token = await getAuthToken();

  if (!token) {
    redirect("/login");
  }

  const post = await fetchPost(postId);
  const parts = token.split(".");
  const payload = parts[1];
  const decodedPayload = atob(payload);
  const parsedPayload = JSON.parse(decodedPayload);
  const userId = parsedPayload.id;

  if (post.authorId !== userId) {
    redirect("/");
  }

  return <UpdatePostForm postId={postId} />;
}
