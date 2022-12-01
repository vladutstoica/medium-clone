import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import client from "../sanity/client";
import { Post } from 'sanity/_types/typings';
import TrendingPosts from '@/components/TrendingPosts';
import GetTrendingPosts from 'sanity/queries/getTrendingPosts';
import GetPosts from 'sanity/queries/getPosts';

interface Props {
    trendingPosts: [Post],
    posts: [Post]
}

const Home: NextPage = ({ trendingPosts, posts }: Props) => {
    return (
        <div className="">
            <Head>
                <title>Medium Clone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Hero />
            {trendingPosts && <TrendingPosts trendingPosts={trendingPosts} />}
        </div>
    )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
    const trendingPosts = await client.fetch(GetTrendingPosts);
    const posts = await client.fetch(GetPosts);

    return {
        props: {
            trendingPosts,
            posts
        }
    }
}