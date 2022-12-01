import Link from "next/link";
import getDate from "sanity/utils/getDate";
import urlFor from "sanity/utils/urlFor";
import { Post } from "sanity/_types/typings";

interface Props {
    posts: [Post]
}

// TODO: fetch first 6 posts
const Posts = ({ posts }: Props) => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-8 space-y-2">
            <div className="flex items-center gap-x-2">
                <svg width="28" height="29" viewBox="0 0 28 29" fill="none" className="ih y">
                    <path fill="#fff" d="M0 .8h28v28H0z"></path><g opacity="0.8" clipPath="url(#trending_svg__clip0)"><path fill="#fff" d="M4 4.8h20v20H4z"></path><circle cx="14" cy="14.79" r="9.5" stroke="#000"></circle><path d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3" stroke="#000" strokeLinecap="round"></path></g><defs><clipPath id="trending_svg__clip0"><path fill="#fff" transform="translate(4 4.8)" d="M0 0h20v20H0z"></path></clipPath></defs>
                </svg>
                <h3 className="font-bold text-xs uppercase">Trendings on Medium</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {posts.map((post, index) => (
                    <Link key={post._id} className="flex gap-x-6" href={`/post/${post.slug.current}`}>
                        <span className="text-3xl font-black text-neutral-200">0{++index}</span>
                        <div className="space-y-2">
                            <div className="flex items-center gap-x-2 mt-2">
                                {/* TODO: We should provide an optimized image and include it using next/image */}
                                <img className="rounded-full" src={urlFor(post.author.image).url()} alt="" width={20} />
                                <span className="font-bold text-xs">{post.author.name}</span>
                            </div>
                            <h2 className="font-bold">{post.title}</h2>
                            <span className="text-xs text-neutral-400">{getDate(post.publishedAt)}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Posts;