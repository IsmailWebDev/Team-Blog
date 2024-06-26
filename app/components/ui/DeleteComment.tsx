"use client";

import { deleteComment } from "@/app/api/services/Comment";
import { useQueryClient } from "@tanstack/react-query";

interface DeleteCommentProps {
  commentId: number;
  postId: number;
}

export default function DeleteComment({
  commentId,
  postId,
}: DeleteCommentProps) {
  const queryClient = useQueryClient();

  const handleDelete = async () => {
    try {
      await deleteComment(commentId);
      await queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
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
