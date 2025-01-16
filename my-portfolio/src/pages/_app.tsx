import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <link rel="icon" href="logo.png" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
        </style>
        <title>Krishi's Portfolio</title>
      </Head>
      <Script src="https://kit.fontawesome.com/df395f211e.js" crossOrigin="anonymous"></Script>
      <Component {...pageProps} />
    </>
  );
}
