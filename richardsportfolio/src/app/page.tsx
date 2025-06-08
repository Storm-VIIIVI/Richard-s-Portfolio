"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
      <motion.h1 
      className="text-4xl font-bold"
      initial = {{y: -50, opacity: 0}}
      animate = {{y: 0, opacity: 1}}
      transition = {{duration: 0.8}}
      >
        Welcome!
      </motion.h1>
      
    </main>
  );
}
