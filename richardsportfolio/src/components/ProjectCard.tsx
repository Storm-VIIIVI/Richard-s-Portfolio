"use client";

import { easeOut, motion } from "framer-motion";
import { desc } from "framer-motion/client";
interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  link,
}: ProjectCardProps) {
  return (
    <motion.div
      className="rounded-lg border-white/10 border p-6 bg-zinc-900 hover: shadow-xl hover: scale-[1.02] duration-300 transition-shadow"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{scale: 1.02}}
      viewport={{ once: true, amount: 0.2}}
      transition={{ duration: 0.5, ease: 'easeOut'}}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/70 mb-3">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover: underline text-sm"
        >
          View Project
        </a>
      )}
    </motion.div>
  );
}
