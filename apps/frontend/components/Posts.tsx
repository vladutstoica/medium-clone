import Link from "next/link";
import getDate from "sanity/utils/getDate";
import urlFor from "sanity/utils/urlFor";
import { Post } from "sanity/_types/typings";

interface Props {
    posts: [Post]
}

const Posts = ({ posts }: Props) => {
    return (
        <div className="max-w-7xl mx-auto lg:max-w-none lg:mx-0 order-2 lg:order-1 px-6 py-8 space-y-8">
            {posts.map((post) => (
                <Link key={post._id} className="flex justify-between items-start gap-12" href={`/post/${post.slug.current}`}>
                    <div className="max-w-xs sm:max-w-md flex flex-col space-y-2">
                        <div className="flex items-center gap-x-2 mt-2">
                            {/* TODO: We should provide an optimized image and include it using next/image */}
                            <img className="aspect-square object-cover rounded-full" src={urlFor(post.author.image).url()} alt="" width={22} />
                            <span className="font-bold text-xs">{post?.author?.name}</span>
                        </div>
                        <span className="font-bold sm:text-2xl leading-5">{post?.title}</span>
                        <p className="hidden sm:block font-light text-sm text-neutral-500">{post?.description}</p>
                        <span className="text-xs text-neutral-400">{getDate(post.publishedAt)}</span>
                    </div>
                    {post.mainImage && <img className="w-24 sm:w-40 lg:w-60 aspect-square sm:aspect-video object-cover sm:object-cover" src={urlFor(post.mainImage).url()} alt="" />}
                </Link>
            ))}
        </div>
    )
}

export default Posts;