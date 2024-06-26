"use client";

import Footer from "@/app/components/ui/Footer";
import Navigation from "@/app/components/ui/Navigation";
import Image from "next/image";
import { User } from "@/app/interfaces/users.interface";
import CommentList from "@/app/components/ui/CommentList";
import Link from "next/link";
import DeletePost from "@/app/components/ui/DeletePost";
import { useQuery } from "@tanstack/react-query";
import { Post } from "@/app/interfaces/posts.interface";
import { fetchUser } from "@/app/api/services/User";
import { fetchCommentsByPostId } from "@/app/api/services/Comment";
import { fetchPost } from "@/app/api/services/Post";
import CreateCommentForm from "./CreateCommentForm";

interface PostClientProps {
  postId: number;
  user?: User;
}

export default function PostClient({ postId, user }: PostClientProps) {
  const { data: post, isLoading: isPostLoading } = useQuery({
    queryKey: ["post", postId],
    queryFn: async () => await fetchPost(postId),
  });

  const { data: commentsWithUserData, isLoading: isCommentsLoading } = useQuery(
    {
      queryKey: ["comments"],
      queryFn: async () => {
        const comments = await fetchCommentsByPostId(postId);
        return Promise.all(
          comments.map(async (comment) => {
            const user = await fetchUser(comment.commenterId);
            return {
              ...comment,
              author: {
                username: user.username,
                profilePic: user.profilePic,
              },
            };
          }),
        );
      },
    },
  );
  if (isCommentsLoading || isPostLoading || !post) {
    return <div>Loading...</div>;
  }

  const paragraphs = post.content
    .split("\n")
    .map((paragraph) => paragraph.replace(/\\n/g, " "));

  const date = new Date(post.updatedAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const isAuthorized = user && user.id === post.author.id;
  return (
    <>
      <Navigation
        className="py-12 text-darkBlue"
        logo="/images/icons/Logo-black.svg"
        menuLogo="/images/icons/menu_24px-black.svg"
      />
      <main className="mx-auto mt-7 w-[1440px] max-w-[100%]">
        <div className="mx-auto mb-8 max-w-[90%] lg:max-w-[50%]">
          <h1 className="text-4xl font-bold leading-[64px] text-darkBlue">
            {post.title}
          </h1>
          <div className="my-8 flex items-center gap-2 justify-self-end text-desaturatedBlue">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/images/${post.author.profilePic || "default-profilePic.png"}`}
              alt="Blog Avatar"
              width={48}
              height={48}
              className="rounded-full"
            />
            <span>{post.author.username}</span>
            <span className="border-l-2 border-solid border-desaturatedBlue pl-2">
              {formattedDate}
            </span>
          </div>
        </div>
        <div className="mx-auto mb-8 flex justify-center">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/images/${post.thumbnail}`}
            alt="Thumbnail"
            width={962}
            height={500}
            className=""
          />
        </div>
        <div className="mx-auto mb-8 max-w-[90%] lg:max-w-[50%]">
          {paragraphs.map((paragraph, index) => (
            <p className="mb-4 text-darkBlue opacity-90" key={index}>
              {paragraph}
            </p>
          ))}

          <div className="flex items-center gap-8 border-b-2 border-solid py-24">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/images/${post.author.profilePic || "default-profilePic.png"}`}
              alt="Blog Avatar"
              width={64}
              height={64}
              className="rounded-full"
            />
            <div className="flex flex-col gap-3">
              <span className="text-lg font-bold uppercase text-softViolet">
                Written by
              </span>
              <span className="text-2xl text-darkBlue">
                {post.author.username}
              </span>
              <span className="max-w-[40ch] text-darkBlue opacity-60">
                {post.author.bio}
              </span>
            </div>
          </div>
          <CommentList
            comments={commentsWithUserData || []}
            userId={user?.id}
            postId={post.id}
          />

          <div className="py-12">
            {isAuthorized && (
              <div className="mt-8 flex gap-4">
                <Link href={`/blog/${post.id}/update`}>
                  <button className="rounded bg-softViolet px-4 py-2 text-white">
                    Edit Post
                  </button>
                </Link>
                <DeletePost postId={post.id} />
              </div>
            )}
            <h2 className="text-lg text-darkBlue">Join the conversation</h2>
            <div className="mt-12 flex items-start gap-4">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/images/${user?.profilePic || "default-profilePic.png"}`}
                alt="Blog Avatar"
                width={56}
                height={56}
                className="rounded-full"
              />
              <CreateCommentForm postId={post.id} userId={user?.id} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
