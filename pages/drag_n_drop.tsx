import type { NextPage } from "next";
import Head from "next/head";
import DNDApp from "../views/drag_n_drop";

const DragNDrop: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>LongShot AI Assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <DNDApp />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by{" "}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            Rajarshi
          </code>
        </a>
      </footer>
    </div>
  );
};

export default DragNDrop;
