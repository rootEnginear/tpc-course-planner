import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Two Point Campus Course Planner</title>
        <meta name="description" content="Two Point Campus Course Planner" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
