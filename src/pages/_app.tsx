import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light+Two&display=swap" rel="stylesheet" />
        <title>Nim Cafe</title>
      </Head>
      <style jsx global>{`
        body {
          font-family: 'Shadows Into Light Two', cursive;
          }`}
      </style>
      <Component {...pageProps} />
    </>
  );
}
