'use client'

import Image from "next/image";
import { motion } from "framer-motion"

export default function Experience() {
    return (
        <main className="full min-h-screen flex items-center justify-center gap-40">
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="p-4 pb-8 rounded-2xl bg-red block bg-[#0153FB]">
                <div className="max-h-80 rounded-2xl overflow-hidden w-full">
                    <Image src="/images/vedant.jpg" alt="Vedant Infotech" width={400} height={200} className="object-cover" />
                </div>
                <h3 className="text-2xl font-bold mt-4">Vedant Infotech</h3>
                <h6 className="text-lg">Frontend Intern</h6>
                <p className="text-sm text-center sm:text-left mt-2">Dec 2020 - Jul 2021</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="p-4 pb-8 rounded-2xl bg-red block bg-[#FE2F60]">
                <div className="max-h-80 rounded-2xl overflow-hidden w-full bg-black">
                    <Image src="/svg/w3nuts.svg" alt="W3nuts" width={400} height={200} className="object-cover" />
                </div>
                <h3 className="text-2xl font-bold mt-4">W3nuts Agency</h3>
                <h6 className="text-lg">Senior frontend Engineer</h6>
                <p className="text-sm text-center sm:text-left mt-2">Sep 2021 - Present</p>
            </motion.div>
        </main>
    )
}