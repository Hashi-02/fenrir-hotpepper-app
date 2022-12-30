import '../styles/globals.css';
import Layout from '../organism/layout';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>GPSグルメサーチ</title>
        <meta
          property="description"
          content="GPS グルメリサーチアプリです。 || This is GPS gourmet Research Appliation"
        />
        <meta property="og:title" content="GPS gourmet Research Appliation" />
        <meta
          property="og:description"
          content="This isGPS gourmet Research Appliation"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons//apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons//favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />

        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        ></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
