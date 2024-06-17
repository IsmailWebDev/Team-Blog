"use client";

import { useRouter } from "next/navigation";
import { deleteComment } from "@/app/api/services/Comment";

interface DeleteCommentProps {
  commentId: number;
}

export default function DeleteComment({ commentId }: DeleteCommentProps) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await deleteComment(commentId);
      router.refresh();
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  };

  return (
    <button className="text-red-500" onClick={handleDelete}>
      Delete
    </button>
  );
}
