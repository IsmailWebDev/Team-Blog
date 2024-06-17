import { fetchPost } from "@/app/api/services/Post";
import Footer from "@/app/components/ui/Footer";
import Navigation from "@/app/components/ui/Navigation";
import Image from "next/image";
import { fetchUser } from "@/app/api/services/User";
import { User } from "@/app/interfaces/users.interface";
import CommentForm from "@/app/components/ui/CommentForm";
import CommentList from "@/app/components/ui/CommentList";
import { getAuthToken } from "@/app/hooks/getAuthToken";
import Link from "next/link";
import DeletePost from "@/app/components/ui/DeletePost";

interface PostProps {
  params: {
    id: number;
  };
}

export default async function Post({ params }: PostProps) {
  let userId: number | undefined;
  let userData: User | undefined;
  const token = await getAuthToken();
  if (token) {
    const parts = token.split(".");

    const payload = parts[1];

    const decodedPayload = atob(payload);

    const parsedPayload = JSON.parse(decodedPayload);

    userId = parsedPayload.id;
  }
  if (userId) {
    userData = await fetchUser(userId);
  }
  const data = await fetchPost(params.id);
  const paragraphs = data.content
    .split("\n")
    .map((paragraph) => paragraph.replace(/\\n/g, " "));
  const date = new Date(data.updatedAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const commentsWithUserData = await Promise.all(
    data.comments.map(async (comment) => {
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
  const isAuthorized = token && userId === data.author.id;
  return (
    <>
      <Navigation
        className="py-12 text-darkBlue"
        logo="../images/icons/Logo-black.svg"
        menuLogo="../images/icons/menu_24px-black.svg"
      />
      <main className="mx-auto mt-7 w-[1440px] max-w-[100%]">
        <div className="mx-auto mb-8 max-w-[90%] lg:max-w-[50%]">
          <h1 className="text-4xl font-bold leading-[64px] text-darkBlue">
            {data.title}
          </h1>
          <div className="my-8 flex items-center gap-2 justify-self-end text-desaturatedBlue">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/images/${data.author.profilePic || "default-profilePic.png"}`}
              alt="Blog Avatar"
              width={48}
              height={48}
              className="rounded-full"
            />
            <span>{data.author.username}</span>
            <span className="border-l-2 border-solid border-desaturatedBlue pl-2">
              {formattedDate}
            </span>
          </div>
        </div>
        <div className="mx-auto mb-8 flex justify-center">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/images/${data.thumbnail}`}
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
              src={`${process.env.NEXT_PUBLIC_API_URL}/images/${data.author.profilePic || "default-profilePic.png"}`}
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
                {data.author.username}
              </span>
              <span className="max-w-[40ch] text-darkBlue opacity-60">
                {data.author.bio}
              </span>
            </div>
          </div>
          <CommentList comments={commentsWithUserData} userId={userId} />

          <div className="py-12">
            {isAuthorized && (
              <div className="mt-8 flex gap-4">
                <Link href={`/blog/${params.id}/update`}>
                  <button className="rounded bg-softViolet px-4 py-2 text-white">
                    Edit Post
                  </button>
                </Link>
                <DeletePost postId={params.id} />
              </div>
            )}
            <h2 className="text-lg text-darkBlue">Join the conversation</h2>
            <div className="mt-12 flex items-start gap-4">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/images/${userData?.profilePic || "default-profilePic.png"}`}
                alt="Blog Avatar"
                width={56}
                height={56}
                className="rounded-full"
              />
              <CommentForm postId={params.id} userId={userId} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
