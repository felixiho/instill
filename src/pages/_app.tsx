import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import "@/styles/globals.css";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "@/config/chakra";
import PageTransition from "@/components/layouts/PageTransition";
import { CopyrightYearProvider } from "@/context/CopyrightYearContext";
import ErrorBoundary from "@/components/shared/ErrorBoundary";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const copyRightYear: number = new Date().getFullYear();

  return (
    <PageTransition>
      <ChakraProvider theme={theme}>
        <CopyrightYearProvider value={copyRightYear}>
        <CSSReset />
        <Head>
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <link
            rel="preload"
            href="/fonts/Larsseit.woff"
            as="font"
            type="font/woff"
            crossOrigin=""
          />
          <link rel="preload" href="/fonts/Larsseit-light.woff2" as="font" />
        </Head>
        <ErrorBoundary>{getLayout(<Component {...pageProps} />)}</ErrorBoundary>
        </CopyrightYearProvider>
      </ChakraProvider>
    </PageTransition>
  );
}
