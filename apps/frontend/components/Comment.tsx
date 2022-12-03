import { Comment } from "sanity/_types/typings"

interface Props {
    comment: Comment
}

const Comment = ({ comment }: Props) => {
    return (
        <div className="space-y-2">
            <span className="font-bold text-xl">{comment.name}</span>
            <p className="text-sm text-neutral-600">{comment.message}</p>
        </div>
    )
}

export default Comment;