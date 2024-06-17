import { Post } from "@/app/interfaces/posts.interface";

export async function fetchPosts(
  limit: number,
  pageParam: number = 0,
): Promise<{ allPosts: Post[]; nextCursor?: number; deletedPosts: number }> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?limit=${limit}&cursor=${pageParam}`,
  );
  const { data } = await res.json();
  return data;
}

export async function fetchPost(postId: number): Promise<Post> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}`);
  const { data } = await res.json();
  return data;
}

export async function createPost(formData: FormData): Promise<Post> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
    method: "POST",
    body: formData,
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to create post");
  }

  return response.json();
}

export async function updatePost(
  postId: number,
  formData: FormData,
): Promise<Post> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}`,
    {
      method: "PATCH",
      body: formData,
      credentials: "include",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to update post");
  }

  return response.json();
}

export async function deletePost(postId: number): Promise<void> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}`,
    {
      method: "DELETE",
      credentials: "include",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to delete post");
  }
}
