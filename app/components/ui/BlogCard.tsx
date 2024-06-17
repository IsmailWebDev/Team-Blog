import { Post } from "@/app/interfaces/posts.interface";
import Image from "next/image";
interface CardProps {
  data: Post;
}
export default function BlogCard({ data }: CardProps) {
  const date = new Date(data.updatedAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-lg">
      <div>
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}/images/${data.thumbnail}`}
          alt="Blog Image 1 "
          width={367}
          height={220}
          className="w-full"
        />
      </div>

      <div className="flex grow flex-col gap-8 p-4">
        <h2 className="text-2xl text-softBlue">
          <a href={`/blog/${data.id}`}>{data.title}</a>
        </h2>
        <p className="text-darkBlue">{data.excerpt}</p>
        <div className="mt-auto flex items-center gap-2 justify-self-end text-desaturatedBlue">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/images/${data.author.profilePic}`}
            alt="Blog Avatar 1 "
            width={48}
            height={48}
            className=""
          />
          <span>{data.author.username}</span>
          <span className="border-l-2 border-solid border-desaturatedBlue pl-2">
            {formattedDate}
          </span>
        </div>
      </div>
    </div>
  );
}
