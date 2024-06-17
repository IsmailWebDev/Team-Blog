"use client";
import { fetchPosts } from "@/app/api/services/Post";
import BlogCard from "./BlogCard";
import Button from "./Button";
import { useState, useEffect, useCallback } from "react";
import { Post } from "@/app/interfaces/posts.interface";

async function fetchInitialPosts() {
  const limit = 9;
  const initialCursor = 0;
  const data = await fetchPosts(limit, initialCursor);
  return data;
}

export default function BlogCards() {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [nextCursor, setNextCursor] = useState<number>();
  const [deletedPosts, setDeletedPosts] = useState(0);
  const [previousCursor, setPreviousCursor] = useState<number>();

  useEffect(() => {
    async function fetchData() {
      const { allPosts, nextCursor, deletedPosts } = await fetchInitialPosts();
      setAllPosts(allPosts);
      setNextCursor(nextCursor);
      setDeletedPosts(deletedPosts);
    }
    fetchData();
  }, []);

  const loadMore = useCallback(async () => {
    const limit = 9;
    const { allPosts: newPosts, nextCursor: newCursor } = await fetchPosts(
      limit,
      nextCursor,
    );
    setAllPosts(newPosts);
    setPreviousCursor(nextCursor);
    setNextCursor(newCursor);
  }, [nextCursor]);

  const loadPrevious = useCallback(async () => {
    const limit = 9;
    const cursor = previousCursor || 0;
    const { allPosts: newPosts, nextCursor: newCursor } = await fetchPosts(
      limit,
      cursor - (limit + deletedPosts),
    );
    setAllPosts(newPosts);
    setPreviousCursor(cursor - (limit + deletedPosts));
    setNextCursor(newCursor);
  }, [previousCursor, deletedPosts]);

  return (
    <>
      <div className="mb-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {allPosts.map((post) => (
          <BlogCard key={post.id} data={post} />
        ))}
      </div>
      <div className="flex justify-center gap-4 pb-8">
        {previousCursor === 0
          ? undefined
          : previousCursor && (
              <Button
                className="bg-softBlue bg-opacity-50 text-black hover:bg-opacity-100"
                onClick={loadPrevious}
              >
                Previous
              </Button>
            )}
        {nextCursor && (
          <Button
            className="bg-softBlue bg-opacity-50 text-black hover:bg-opacity-100"
            onClick={loadMore}
          >
            Next
          </Button>
        )}
      </div>
    </>
  );
}
