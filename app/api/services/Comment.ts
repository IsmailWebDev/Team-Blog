import { Comment } from "@/app/interfaces/comments.interface";

export async function fetchCommentsByPostId(
  postId: number,
): Promise<Comment[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/comments/${postId}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch comments");
  }

  const { data } = await response.json();
  return data;
}

export async function createComment(
  postId: number,
  commenterId: number,
  content: string,
): Promise<Comment> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",

    body: JSON.stringify({ postId, commenterId, content }),
  });

  if (!response.ok) {
    throw new Error("Failed to create comment");
  }

  const { data } = await response.json();
  return data;
}

export async function updateComment(
  commentId: number,
  content: string,
): Promise<Comment> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/comments/${commentId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",

      body: JSON.stringify({ content }),
    },
  );

  if (!response.ok) {
    throw new Error("Failed to update comment");
  }

  return response.json();
}

export async function deleteComment(commentId: number): Promise<void> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/comments/${commentId}`,
    {
      method: "DELETE",
      credentials: "include",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to delete comment");
  }
}
