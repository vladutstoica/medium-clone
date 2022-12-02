import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import client from "sanity/client"
import GetPost from "sanity/queries/getPost";
import GetSlugs from "sanity/queries/GetSlugs";
import { Post } from 'sanity/_types/typings';

interface Props {
    post: Post
}

const Post: NextPage = ({ post }: Props) => {
    console.log({ post })
    return (
        <div>{post.title}</div>
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