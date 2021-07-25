import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CardWithIcon({ className = '', img = '', text = '', onClick = () => {} }) {
  return (
    <motion.div
      whileHover={{ scale: 0.9 }}
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.5 }}
      className={`mx-2 h-46 w-48 p-5 shadow-lg bg-blue-600 hover:bg-gradient-custom hover:animate-moving ${className}`}
      onClick={onClick}
    >
      <Image src={img} width="50px" height="50px" alt={text} />
      <p className="!text-white font-semibold !text-xl !mt-8 !mb-4">{text}</p>
    </motion.div>
  );
}
