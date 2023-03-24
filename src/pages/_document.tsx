import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/tpc-course-planner/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/tpc-course-planner/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/tpc-course-planner/favicon-16x16.png"
        />
        <link rel="manifest" href="/tpc-course-planner/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/tpc-course-planner/safari-pinned-tab.svg"
          color="#ed891a"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
      </Head>
      <body className="mx-auto max-w-[75ch] p-16 md:py-32">
        <Main />
        <NextScript />
        <link
          id="linkrel-font"
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap"
          media="print"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap"
          />
        </noscript>
      </body>
    </Html>
  );
}
