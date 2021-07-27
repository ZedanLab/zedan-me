import React from 'react';

import { motion } from 'framer-motion';

export default function ProjectCard({ className = '', project }) {
  return (
    <motion.a
      whileHover={{ scale: 0.85 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.9 }}
      className={`mx-2 h-46 w-72 p-5 shadow-lg bg-blue-600 hover:bg-gradient-custom hover:animate-moving !no-underline ${className}`}
      href={project.link}
      target="_blank"
      rel="noreferrer"
    >
      <p className="!text-white font-semibold !text-2xl !mt-8 !mb-4">{project.name}</p>
      <p className="!text-white">{project.brief}</p>
    </motion.a>
  );
}
