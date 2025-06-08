"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm: px-4 max-w-4xl mx-auto text-center"
    >
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Call me c;
      </motion.h2>
      <motion.p
        className="text-white/70 text-lg mb-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Reach out to me if you want to have an enjoyable night c;
        <br />
        <br />
      </motion.p>
      <motion.a
        href="mailto:richard20065@hotmail.com"
        className="inline-block bg-purple-600 hover: bg-purple-700 text-white font-medium py-2 px-6 rounded transition"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Say Hello c;
      </motion.a>
    </section>
  );
}
