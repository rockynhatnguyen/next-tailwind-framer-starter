import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Tailwind Framer | Starter Theme </title>
        <meta name="description" content="A Next.js starter theme using TailwindCSS and Framer Motion." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright &copy; 2022 Rocky Nguyen. All rights reserved.
        </a>
      </footer>
    </div>
  )
}
