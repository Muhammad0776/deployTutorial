/* eslint-disable @next/next/inline-script-id */
import { NextSeo } from "next-seo";
import { Provider } from "next-auth/providers/auth0";
import Script from "next/script";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        {/* Google analytics */}
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-J8BW81H7BX`}
        />

        <Script strategy="lazyOnload">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-J8BW81H7BX', {
          page_path: window.location.pathname,
        });
        `}
        </Script>

        <NextSeo
          title="this is nextjs tutorial"
          titleTemplate="Mukhammad Yo'ldoshev "
          description="This is my nextjs test"
        />

        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
