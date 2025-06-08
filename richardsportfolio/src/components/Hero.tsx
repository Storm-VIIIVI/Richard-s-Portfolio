"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center gap-6">
      <motion.h1
        className="text-5xl font-extrabold tracking-tight"
        initial={{ opacity: 0, y: 5000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        I am the Lobotomizer!
      </motion.h1>
      <motion.p
        className="max-w-xl text-white/70 text-lg"
        initial={{ opacity: 0, y: -5000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.2 }}
      >
        I like to discombobulate people
      </motion.p>
      <motion.a
        className="mt-4 inline-block rounded bg-purple-600 hover: bg-purple-700 px-6 py-2 text-white font-medium transition"
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        View projects
      </motion.a>
    </section>
  );
}
