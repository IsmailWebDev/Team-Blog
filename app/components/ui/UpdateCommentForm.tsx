"use client";

import { useState } from "react";
import { updateComment } from "@/app/api/services/Comment";
import { useQueryClient } from "@tanstack/react-query";

interface EditCommentFormProps {
  commentId: number;
  initialContent: string;
  postId: number;
}

export default function UpdateCommentForm({
  commentId,
  initialContent,
  postId,
}: EditCommentFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(initialContent);
  const queryClient = useQueryClient();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setContent(initialContent);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateComment(commentId, content);
      await queryClient.invalidateQueries({ queryKey: ["comments"] });
      console.log(postId);

      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update comment:", error);
    }
  };

  return (
    <>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full rounded border border-gray-300 px-4 py-2"
            rows={4}
            required
          ></textarea>
          <div className="mt-2">
            <button
              type="submit"
              className="mr-2 rounded bg-blue-500 px-4 py-2 text-white"
            >
              Update
            </button>
            <button
              type="button"
              className="rounded bg-gray-500 px-4 py-2 text-white"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <button className="text-blue-500" onClick={handleEditClick}>
            Edit
          </button>
        </>
      )}
    </>
  );
}
