import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
          <title>Medium Clone</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Medium Clone made by Vlad Stoica" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
