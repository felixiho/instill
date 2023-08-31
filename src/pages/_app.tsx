
import '@fontsource/outfit/300.css'
import '@fontsource/outfit/400.css'
import '@fontsource/outfit/500.css'
import '@fontsource/outfit/600.css'
import '@fontsource/outfit/700.css'
import '@fontsource/outfit/800.css'
import '@fontsource/outfit/900.css'

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import "@/styles/globals.css";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import type { AppProps } from "next/app"; 
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
        <ErrorBoundary>{getLayout(<Component {...pageProps} />)}</ErrorBoundary>
        </CopyrightYearProvider>
      </ChakraProvider>
    </PageTransition>
  );
}
