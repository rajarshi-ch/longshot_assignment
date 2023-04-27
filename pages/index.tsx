import type { NextPage } from "next";
import Head from "next/head";
import MorphingText from "../components/morphingText/morphingText";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Rajarshis Web Showcase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-semibold">Hello there,</h1>
        <MorphingText texts={["hola", "bonjour", "नमस्ते", "nǐn hǎo", "olá"]} />
        <p className="mt-3 text-2xl">
          This website is a curation of multiple mini apps, to showcase my web
          dev skills :) . Click any one to get started
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="/mock_ui"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Dashboard Design &rarr;</h3>
            <p className="mt-4 text-xl">
              A responsive dashboard with light & dark mode.
            </p>
          </a>

          <a
            href="/drag_n_drop"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Drag & Drop &rarr;</h3>
            <p className="mt-4 text-xl">
              A re-arrangeable drag & drop list , implemented without any
              libraries .
            </p>
          </a>

          <a
            href="/login"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Login Page &rarr;</h3>
            <p className="mt-4 text-xl">A simple login page.</p>
          </a>

          <a
            href="/crud"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">CRUD operations &rarr;</h3>
            <p className="mt-4 text-xl">
              A simple dashboard with CRUD operations .
            </p>
          </a>

          <a
            href="/react_table"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Responsive Table &rarr;</h3>
            <p className="mt-4 text-xl">
              A responsive table with filtering and sorting .
            </p>
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
