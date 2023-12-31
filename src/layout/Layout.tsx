import Head from "next/head";
import { ChildrenProps } from "@/components/layouts/types";

const Layout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Head>
        <title>Instill Education Take home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main> 
        {children}
      </main>
    </>
  );
};

export default Layout;
