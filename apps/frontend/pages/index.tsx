import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import client from "../sanity/client";
import { Category, Post } from 'sanity/_types/typings';
import TrendingPosts from '@/components/TrendingPosts';
import GetTrendingPosts from 'sanity/queries/getTrendingPosts';
import GetPosts from 'sanity/queries/getPosts';
import Categories from '@/components/Categories';
import GetCategories from 'sanity/queries/getCategories';
import Posts from '@/components/Posts';
import Footer from '@/components/Footer';

interface Props {
    trendingPosts: [Post],
    posts: [Post],
    categories: [Category]
}

const Home: NextPage = ({ trendingPosts, posts, categories }: Props) => {
    return (
        <div>
            <Head>
                <title>Medium Clone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Hero />
            {trendingPosts && <TrendingPosts trendingPosts={trendingPosts} />}

            <div className="max-w-7xl mx-auto flex flex-col justify-between items-start lg:flex-row ">
                {categories && <Categories categories={categories} />}
                {posts && <Posts posts={posts} />}
            </div>
            <Footer />
        </div>
    )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
    const trendingPosts = await client.fetch(GetTrendingPosts);
    const posts = await client.fetch(GetPosts);
    const categories = await client.fetch(GetCategories);

    return {
        props: {
            trendingPosts,
            posts,
            categories
        }
    }
}