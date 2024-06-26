"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createComment } from "@/app/api/services/Comment";
import { useQueryClient } from "@tanstack/react-query";

interface CommentFormProps {
  postId: number;
  userId: number | undefined;
}

export default function CreateCommentForm({
  postId,
  userId,
}: CommentFormProps) {
  const [commentContent, setCommentContent] = useState("");
  const router = useRouter();
  const queryClient = useQueryClient();

  const handleSubmitComment = async () => {
    if (userId && commentContent.trim() !== "") {
      try {
        await createComment(Number(postId), userId, commentContent);
        await queryClient.invalidateQueries({ queryKey: ["comments"] });

        setCommentContent("");
      } catch (error) {
        console.error("Failed to submit comment:", error);
      }
    } else {
      router.push("/login");
    }
  };

  return (
    <>
      <textarea
        name="Comment"
        id="comment"
        className="h-48 flex-grow rounded-lg border-[4px] border-softViolet bg-offWhite p-4 placeholder-darkBlue placeholder-opacity-90"
        placeholder="Comments"
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
      ></textarea>
      <button
        className="mt-4 rounded bg-softViolet px-4 py-2 text-white"
        onClick={handleSubmitComment}
      >
        Submit Comment
      </button>
    </>
  );
}
