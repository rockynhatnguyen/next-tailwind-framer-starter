import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Images
import image1 from "../public/images/image-1.webp"
import image2 from "../public/images/image-2.webp"
import image3 from "../public/images/image-3.webp"
import image4 from "../public/images/image-4.webp"
import image5 from "../public/images/image-5.webp"

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.5,
    },
  },
  exit: {
    opacity: 0,
    y: 200,
    scale: [1, 1.5],
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

const Loader = ({ setLoading }) => {
  return (
    <motion.div className="loader">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(true)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        <ImageBlock variants={item} name="image-1" id={image1} />
        <motion.div variants={itemMain} className="transition-image image-2">
          <Image
            layoutid="main-image"
            src={image2}
            alt="Loader image"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
        <ImageBlock variants={item} name="image-3" id={image3} />
        <ImageBlock variants={item} name="image-4" id={image4} />
        <ImageBlock variants={item} name="image-5" id={image5} />
      </motion.div>
    </motion.div>
  );
};

export const ImageBlock = ({ posX, posY, variants, name, id }) => {
  return (
    <motion.div
      variants={variants}
      className={`image-block ${name}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}
    >
      <Image
        className={`image-img ${name}`}
        src={id}
        alt={`Agency gathering room.`}
        layout="responsive"
        objectFit="cover"
      />
    </motion.div>
  );
};
export default Loader;
