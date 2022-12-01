import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import client from "../sanity/client";
import GetPosts from 'sanity/queries/getPosts';
import { Post } from 'sanity/_types/typings';
import Posts from '@/components/Posts';

interface Props {
    posts: [Post]
}

const Home: NextPage = ({ posts }: Props) => {
    return (
        <div className="">
            <Head>
                <title>Medium Clone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Hero />
            {posts && <Posts posts={posts} />}
        </div>
    )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
    const posts = await client.fetch(GetPosts);

    return {
        props: {
            posts
        }
    }
}