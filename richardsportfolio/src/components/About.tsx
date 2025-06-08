"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm: px-8 max-w-4xl mx-auto text-center"
    >
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me!!!!
      </motion.h2>
      <motion.p
        className="text-white/70 text-lg leading-7"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        I'm Richard, and I like turtles!
        <br />
        <br />I love fingering minors when playing the guitar!
      </motion.p>
    </section>
  );
}
