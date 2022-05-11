import Head from "next/head";
import React from "react";
import HeaderMain from "../Header/HeaderMain";

export default function LayoutContainer({ children, title, description }) {
  return (
    <div className="page_main_wrapper">
      <Head>
        <title>{title ? `Daily Needs - ${title}` : "Daily Needs"}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* app header is here */}
      <header>
        <HeaderMain />
      </header>
      {/* app body is here */}
      <main>
        <div className="container_wrapper">{children}</div>
      </main>

      {/* app footer is here */}
      <footer className="bg-black text-white p-5 my-20">
        This is footer here...!
      </footer>
    </div>
  );
}
