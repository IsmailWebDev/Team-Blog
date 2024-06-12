import Image from "next/image";

export default function BlogCard() {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-lg">
      <div>
        <Image
          src="/images/blog-img1.png"
          alt="Blog Image 1 "
          width={367}
          height={220}
          className="w-full"
        />
      </div>

      <div className="flex grow flex-col gap-8 p-4">
        <h2 className="text-2xl text-softBlue">
          <a href="#">Team Security Update</a>
        </h2>
        <p className="text-darkBlue">
          Because we take security, privacy, and transparency very seriously, we
          are sharing the details of a recent incident.
        </p>
        <div className="mt-auto flex items-center gap-2 justify-self-end text-desaturatedBlue">
          <Image
            src="/images/Blog-Avatar1.png"
            alt="Blog Avatar 1 "
            width={48}
            height={48}
            className=""
          />
          <span>Bessie Cooper</span>
          <span className="border-l-2 border-solid border-desaturatedBlue pl-2">
            December 24, 2022
          </span>
        </div>
      </div>
    </div>
  );
}
