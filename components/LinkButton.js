import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LinkButton({ className = '', replace = false, href = '#', children }) {
  return (
    <Link href={href} replace={replace} passHref>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        type="button"
        className={`p-4 py-2 shadow-lg bg-blue-600 hover:bg-gradient-custom hover:animate-moving text-white rounded-3xl ${className}`}
      >
        {children}
      </motion.button>
    </Link>
  );
}
