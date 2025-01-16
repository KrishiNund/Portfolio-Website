import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <title>Krishi&apos;s Portfolio</title>
      </Head>
      <Script src="https://kit.fontawesome.com/df395f211e.js" crossOrigin="anonymous"></Script>
      <Component {...pageProps} />
    </>
  );
}
