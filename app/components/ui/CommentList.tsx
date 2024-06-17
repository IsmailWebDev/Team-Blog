import { Comment } from "@/app/interfaces/comments.interface";
import Image from "next/image";
import EditCommentForm from "./EditCommentForm";
import DeleteComment from "./DeleteComment";

interface CommentWithUserData extends Comment {
  author: {
    username: string;
    profilePic?: string;
  };
}

interface CommentListProps {
  comments: CommentWithUserData[];
  userId?: number;
}

export default function CommentList({ comments, userId }: CommentListProps) {
  return (
    <div className="mt-8">
      <h3 className="mb-4 text-lg text-darkBlue">Comments</h3>
      {comments.map((comment) => (
        <div key={comment.id} className="mb-4 flex flex-col gap-4">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/images/${comment.author.profilePic || "default-profilePic.png"}`}
            alt="Comment Author Avatar"
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <p className="font-bold text-darkBlue">{comment.author.username}</p>
            <p className="text-darkBlue">{comment.content}</p>
          </div>
          {userId && userId === comment.commenterId && (
            <div className="flex items-center gap-2">
              <EditCommentForm
                commentId={comment.id}
                initialContent={comment.content}
              />
              <DeleteComment commentId={comment.id} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
