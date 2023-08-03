import Head from "next/head";
import React from "react";

function HeadTitle({ title }: { title: string }) {
  return (
    <Head>
      <title>{`${title} | Next Movie`}</title>
    </Head>
  );
}

export default HeadTitle;
