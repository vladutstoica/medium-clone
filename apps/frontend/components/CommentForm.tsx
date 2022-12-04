import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Post, Comment } from "sanity/_types/typings";

interface Props {
    post: Post
}

const CommentForm = ({ post }: Props) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm<Comment>();
    const onSubmit: SubmitHandler<Comment> = async (data: Comment) => {
        data._id = post._id;

        await fetch("/api/createComment", {
            method: "POST",
            body: JSON.stringify(data)
        }).then(() => {
            setIsSubmitted(true)
        }).catch((err) => {
            setIsSubmitted(false)
        })
    };

    return (
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
            <span className="font-black text-3xl mb-2">Leave a comment!</span>
            {isSubmitted && <span className="p-2 rounded-sm bg-green-600 font-bold text-neutral-100">The comment is waiting for approval!</span>}
            <input className="p-2 border-2 rounded-sm" type="text" placeholder="Name" {...register("name", { required: true })} autoComplete="off" />
            <textarea className="p-2 border-2 rounded-sm" cols={30} rows={3} placeholder="What are your thoughts?" {...register("message", { required: true })}></textarea>

            {errors.name && <span className="text-sm text-red-600">- Name is required!</span>}
            {errors.message && <span className="text-sm text-red-600">- Message is required!</span>}

            <button className="self-end px-6 py-2 rounded-sm bg-neutral-900 hover:bg-neutral-700 text-neutral-100" type="submit" disabled={isSubmitted}>Comment!</button>
        </form>
    )
}

export default CommentForm;