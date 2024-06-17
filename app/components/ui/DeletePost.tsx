"use client";

import { useRouter } from "next/navigation";
import { deletePost } from "@/app/api/services/Post";

interface DeletePostProps {
  postId: number;
}

export default function DeletePost({ postId }: DeletePostProps) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await deletePost(postId);
      router.push("/blog");
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  return (
    <button
      className="rounded bg-red-500 px-4 py-2 text-white"
      onClick={handleDelete}
    >
      Delete Post
    </button>
  );
}
