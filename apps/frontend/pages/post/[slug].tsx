import Comments from "@/components/Comments";
import Footer from "@/components/Footer";
import PostDetails from "@/components/PostDetails";
import PostHeader from "@/components/PostHeader";
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import client from "sanity/client"
import GetPost from "sanity/queries/getPost";
import GetSlugs from "sanity/queries/GetSlugs";
import { Post } from 'sanity/_types/typings';

interface Props {
    post: Post
}

const Post: NextPage = ({ post }: Props) => {
    return (
        <div>
            <PostHeader />
            <PostDetails post={post} />
            <Comments post={post} />
            <Footer />
        </div>
    )
}

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await client.fetch(GetSlugs);

    const paths = posts.map((post: Post) => ({
        params: { slug: post.slug.current }
    }))

    return { paths, fallback: "blocking" }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = await client.fetch(GetPost, { slug: params?.slug });

    return {
        props: {
            post
        },
        revalidate: 60
    }
}