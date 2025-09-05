"use client"

import Image from "next/image";
import Hero from "../../public/images/gray.jpg";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {

  return (
    <div className="w-full h-screen flex overflow-hidden">
      <div className="w-7/12 flex flex-col justify-center h-screen p-20 gap-8">
        <div
          className="text"
        >
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            className="text-7xl font-bold uppercase mb-3">prit bhanvadiya</motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ delay: 0.2, duration: 0.2 }}
            className="text-5xl mb-8">Senior frontend Engineer</motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ delay: 0.3, duration: 0.2 }}
            className="text-lg mt-4 max-w-4xl">
            "I am a self-taught frontend developer with over 4 years of experience, specializing in React, Next.js, and modern web animations. I enjoy building creative, responsive, and user-friendly interfaces while continuously learning and exploring new technologies to improve my craft."
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ delay: 0.4, duration: 0.2 }}
            className="flex gap-4 mt-5">
            <motion.div
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="https://www.linkedin.com/in/prit-bhanvadiya-6a2567208/" target="_blank" rel="noopener noreferrer">
                <Image src="/svg/linkedin-icon.svg" alt="linkedin" width={28} height={28} />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="mailto:pritbhanvadiya3600@gmail.com" target="_blank" rel="noopener noreferrer">
                <Image src="/svg/gmail-icon.svg" alt="github" width={28} height={28} />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="https://github.com/PritBhanvadiya" target="_blank" rel="noopener noreferrer">
                <Image src="/svg/github-icon.svg" alt="github" width={28} height={28} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="w-5/12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="w-full h-full">
          <Image
            src={Hero}
            alt="Homepage Image"
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
