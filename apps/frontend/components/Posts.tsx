import Link from "next/link";
import getDate from "sanity/utils/getDate";
import urlFor from "sanity/utils/urlFor";
import { Post } from "sanity/_types/typings";
import Image from 'next/image'

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
                            <Image className="aspect-square object-cover rounded-full" src={urlFor(post.author.image).url()} width={22} height={22} alt={"Author profile picture"} />
                            <span className="font-bold text-xs">{post?.author?.name}</span>
                        </div>
                        <span className="font-bold sm:text-2xl leading-5">{post?.title}</span>
                        <p className="hidden sm:block font-light text-sm text-neutral-500">{post?.description}</p>
                        <span className="text-xs text-neutral-400">{getDate(post.publishedAt)}</span>
                    </div>

                    {post.mainImage && <Image className="w-24 sm:w-40 lg:w-60 aspect-square sm:aspect-video object-cover sm:object-cover" src={urlFor(post.mainImage).url()} width={240} height={135} alt={"Post image"} />}
                </Link>
            ))}
        </div>
    )
}

export default Posts;