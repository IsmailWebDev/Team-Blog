"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchPost, updatePost } from "@/app/api/services/Post";

interface UpdatePostProps {
  postId: number;
}

export default function UpdatePostForm({ postId }: UpdatePostProps) {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const post = await fetchPost(postId);
        setTitle(post.title);
        setExcerpt(post.excerpt);
        setContent(post.content);
      } catch (error) {
        console.error("Failed to fetch post:", error);
      }
    };

    fetchPostData();
  }, [postId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("excerpt", excerpt);
      formData.append("content", content);
      if (thumbnail) {
        formData.append("thumbnail", thumbnail);
      }
      await updatePost(postId, formData);
      router.push(`/blog/${postId}`);
    } catch (error) {
      console.error("Failed to update post:", error);
    }
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnail(file);
    }
  };

  return (
    <main className="container mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Update Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="mb-1 block font-bold">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded border border-gray-300 px-4 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="excerpt" className="mb-1 block font-bold">
            Excerpt
          </label>
          <textarea
            id="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="w-full rounded border border-gray-300 px-4 py-2"
            rows={3}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="mb-1 block font-bold">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full rounded border border-gray-300 px-4 py-2"
            rows={10}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="thumbnail" className="mb-1 block font-bold">
            Thumbnail
          </label>
          <input
            type="file"
            id="thumbnail"
            accept="image/*"
            onChange={handleThumbnailChange}
            className="w-full"
          />
        </div>
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Update Post
        </button>
      </form>
    </main>
  );
}
