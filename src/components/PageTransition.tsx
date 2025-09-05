'use client'

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import FrozenRoute from '@/components/FrozenRoute'
import DownloadBtn from "./DownloadBtn";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div key={pathname}>
                <FrozenRoute>
                    <motion.header
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                        className="w-full absolute top-0 left-0 right-0 px-20 py-10 flex items-center justify-between z-20">
                        <Link href={"/"} className="logo">
                            <motion.h1
                                className="text-4xl font-bold flex gap-1 -tracking-widest"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                whileHover="hover"
                            >
                                {"Pr!t.Dev".split("").map((char, i) => (
                                    <motion.span
                                        key={i}
                                        variants={{
                                            hover: char === "!" ? { rotate: 180, x: 3, transition: { type: "spring", stiffness: 300 } } : {},
                                        }}
                                        className="inline-block"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.h1>
                        </Link>
                        <nav>
                            <ul className="flex gap-10 text-lg font-medium">
                                <motion.li
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -6 }}
                                    transition={{ delay: 0.1, duration: 0.2 }}
                                >
                                    <Link href={"/about"} className="hover:underline hover:underline-offset-4">
                                        About
                                    </Link>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -6 }}
                                    transition={{ delay: 0.2, duration: 0.2 }}
                                >
                                    <Link href={"/experience"} className="hover:underline hover:underline-offset-4">
                                        Experience
                                    </Link>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -6 }}
                                    transition={{ delay: 0.3, duration: 0.2 }}
                                >
                                    <Link href={"/skills-techstcks"} className="hover:underline hover:underline-offset-4">
                                        Skills & Tech Stacks
                                    </Link>
                                </motion.li>
                                {/* <li>
                                    <Link href={"/projects"} className="hover:underline hover:underline-offset-4">
                                    Projects
                                    </Link>
                                </li> */}
                            </ul>
                        </nav>
                        <div className="btn">
                           <DownloadBtn />
                        </div>
                    </motion.header>
                    {children}
                </FrozenRoute>
            </motion.div>
        </AnimatePresence>
    )
}

export default PageTransition;