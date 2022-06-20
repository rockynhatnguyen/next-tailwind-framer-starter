import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Head from "next/head"
import Image from "next/image"
import "../styles/home.module.css"

// Images
import headerImage from "../public/images/image-2.webp"

// Components
import Header from "../components/Header"
import Banner from "../components/Banner"
import Loader from "../components/Loader"

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <>
      <Head>
        <title>Next Tailwind Framer | Starter Theme </title>
        <meta name="description" content="A Next.js starter theme using TailwindCSS and Framer Motion." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          {loading ? (
            <motion.div key='loader'>
              <Loader setLoading={setLoading} />
            </motion.div>
          ) : (
            <main>
              <Header />
              <Banner />
              {!loading && (
                <div className='transition-image final'>
                  <motion.div
                    transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                    layoutid='main-image-1'>
                    <Image
                      src={headerImage}
                      alt="Main Agency Image"
                      layout="responsive"
                      placeholder="blur"
                    />
                  </motion.div>
                </div>
              )}

              <footer>
                <a
                  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Copyright &copy; 2022 Rocky Nguyen. All rights reserved.
                </a>
              </footer>
            </main>
          )}
    </>
  )
}
