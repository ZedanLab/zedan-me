import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  className = '',
  type = 'button',
  children,
  handleOnClick = () => {},
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      type={type}
      onClick={handleOnClick}
      className={`p-4 py-2 shadow-lg bg-blue-600 hover:bg-gradient-custom hover:animate-moving text-white rounded-3xl ${className}`}
    >
      {children}
    </motion.button>
  );
}
