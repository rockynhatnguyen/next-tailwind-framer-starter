import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"
import '../styles/globals.css'
import "../sass/main.scss"

const variants = {
  pageInitial: {
    opacity: 0
  },
  pageShow: {
    opacity: 1
  },
  pageExit: {
    opacity: 0,
    y: -200
  }
}

function App({ Component, pageProps, router }) {
  return (
    <AnimateSharedLayout type='crossfade'>
      <AnimatePresence>
        <motion.div key={router.route}
          initial="pageInitial"
          animate="pageShow"
          exit="pageExit"
          variants={variants}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

export default App
