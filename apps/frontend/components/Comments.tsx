import { Post } from "sanity/_types/typings";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

interface Props {
    post: Post
}

const Comments = ({ post }: Props) => {
    return (
        <div className="max-w-2xl mx-auto px-6 py-4 space-y-8">
            <CommentForm post={post} />

            <div className="py-6 space-y-8 border-t-2">
                <span className="font-black text-3xl mb-2">Comments</span>

                {post.comments.map((comment) => (
                    <Comment key={comment._id} comment={comment} />
                ))}
            </div>
        </div>
    )
}

export default Comments;