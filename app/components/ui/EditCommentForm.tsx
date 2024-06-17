"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateComment } from "@/app/api/services/Comment";

interface EditCommentFormProps {
  commentId: number;
  initialContent: string;
}

export default function EditCommentForm({
  commentId,
  initialContent,
}: EditCommentFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(initialContent);
  const router = useRouter();

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
      router.refresh();
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
