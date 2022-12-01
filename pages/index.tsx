import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>LongShot AI Assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Here's the <a className="text-blue-600 ">Solution!</a>
        </h1>

        <p className="mt-3 text-2xl">Click any one to get started</p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="/mock_ui"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Assignment 1 &rarr;</h3>
            <p className="mt-4 text-xl">Mock the UI of the given design.</p>
          </a>

          <a
            href="/drag_n_drop"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Assignment 2 &rarr;</h3>
            <p className="mt-4 text-xl">Implement a drag and drop feature.</p>
          </a>
        </div>
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

export default Home;
