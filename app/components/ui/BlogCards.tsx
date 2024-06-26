"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/app/api/services/Post";
import BlogCard from "./BlogCard";
import Button from "./Button";
import { useState } from "react";
import { Post } from "@/app/interfaces/posts.interface";

export default function BlogCards() {
  const [cursor, setCursor] = useState<number | undefined>(undefined);
  const [previousCursors, setPreviousCursors] = useState<number[]>([]);
  const limit = 9;

  const { isPending, isError, error, data, isFetching } = useQuery({
    queryKey: ["posts", cursor],
    queryFn: () => fetchPosts(limit, cursor),
    staleTime: 0,
  });

  const handleNextPage = () => {
    if (data?.nextCursor) {
      setPreviousCursors((prev) => [...prev, cursor as number]);
      setCursor(data.nextCursor);
    }
  };

  const handlePreviousPage = () => {
    const prevCursor = previousCursors.pop();
    setPreviousCursors([...previousCursors]);
    setCursor(prevCursor);
  };

  const hasPreviousPage = previousCursors.length > 0;
  const hasNextPage = data?.nextCursor != null;

  return (
    <>
      {isPending ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {(error as Error).message}</div>
      ) : (
        <>
          <div className="mb-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {data.allPosts.map((post: Post) => (
              <BlogCard key={post.id} data={post} />
            ))}
          </div>
          <div className="flex justify-center gap-4 pb-8">
            {hasPreviousPage && (
              <Button
                className="bg-softBlue bg-opacity-50 text-black hover:bg-opacity-100"
                onClick={handlePreviousPage}
              >
                Previous
              </Button>
            )}
            {hasNextPage && (
              <Button
                className="bg-softBlue bg-opacity-50 text-black hover:bg-opacity-100"
                onClick={handleNextPage}
              >
                Next
              </Button>
            )}
          </div>
          {isFetching ? <div>Loading...</div> : null}
        </>
      )}
    </>
  );
}
