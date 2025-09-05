'use client'

import { useEffect } from "react";
import { motion } from "framer-motion"

export default function About() {
  useEffect(() => {
    // Your actual "AboutMe.js" data
    const name = "Prit";
    const lastname = "Bhanvadiya";
    const gender = "Male";
    const hobbies = ["Gaming", "Anime", "Motorcycle Riding", "Volleyball"];
    const birthday = new Date(1999, 8, 14); // months are 0-indexed
    const age =
      new Date().getFullYear() -
      birthday.getFullYear() -
      (new Date().getMonth() < birthday.getMonth() ||
        (new Date().getMonth() === birthday.getMonth() &&
          new Date().getDate() < birthday.getDate())
        ? 1
        : 0);
    const email = "pritbhanvadiya3600@gmail.com";

    // Print info in the console
    console.log("👋 Hi, here’s my info:");
    console.log({ name, lastname, gender, hobbies, birthday, age, email });
  }, []);
  return (
    <main className="full min-h-screen flex items-center justify-center p-4 sm:p-20">
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      className="bg-[#1e1e1e] text-[#d4d4d4] font-mono rounded-xl shadow-xl overflow-hidden max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-[#2d2d2d] flex items-center px-4 py-2 text-sm text-gray-300">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56] mr-2"></span>
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e] mr-2"></span>
          <span className="h-3 w-3 rounded-full bg-[#27c93f] mr-4"></span>
          <span className="italic ml-auto">AboutMe.js</span>
        </div>

        {/* Code Content */}
        <pre className="p-4 text-sm leading-6">
          <span className="text-gray-500">1</span>{" "}
          <span className="text-blue-400">const</span> name ={" "}
          <span className="text-pink-400">"Prit"</span>;
          {"\n"}
          <span className="text-gray-500">2</span>{" "}
          <span className="text-blue-400">const</span> lastname ={" "}
          <span className="text-pink-400">"Bhanvadiya"</span>;
          {"\n"}
          <span className="text-gray-500">3</span>{" "}
          <span className="text-blue-400">const</span> gender ={" "}
          <span className="text-pink-400">"Male"</span>;
          {"\n"}
          <span className="text-gray-500">4</span>{" "}
          <span className="text-blue-400">let</span> hobbies = [
          <span className="text-pink-400">'Gaming'</span>,{" "}
          <span className="text-pink-400">'Anime'</span>,{" "}
          <span className="text-pink-400">'Motorcycle Riding'</span>,{" "}
          <span className="text-pink-400">'Volleyball'</span>];
          {"\n"}
          <span className="text-gray-500">5</span>{" "}
          <span className="text-blue-400">const</span> birthday ={" "}
          <span className="text-yellow-300">new Date</span>(
          <span className="text-green-300">1999</span>,{" "}
          <span className="text-green-300">8</span>,{" "}
          <span className="text-green-300">14</span>);
          {"\n"}
          <span className="text-gray-500">6</span>{" "}
          <span className="text-blue-400">let</span> age ={" "}
          <span className="text-yellow-300">Math.abs</span>(
          <span className="text-yellow-300">new Date</span>() - birthday);
          {"\n"}
          <span className="text-gray-500">7</span>{" "}
          <span className="text-green-500">// returns 26</span>
          {"\n"}
          <span className="text-gray-500">8</span>{" "}
          <span className="text-blue-400">const</span> email ={" "}
          <span className="text-pink-400">"pritbhanvadiya3600@gmail.com"</span>;
          {"\n"}
          <span className="text-gray-500">9</span>{" "}
          <span className="text-yellow-300">console.log</span>(
          <span className="text-pink-400">
            "You can get this info on the console!"
          </span>);
        </pre>
      </motion.section>
    </main>
  );
}