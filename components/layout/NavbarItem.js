import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

function NavbarItem({ label, isActive, route = 'index' }) {
  return (
    <Link replace href={route} className="group" passHref>
      <motion.div
        whileHover={{ scale: 1.1 }}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        whileTap={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className={`cursor-pointer flex items-center justify-center align-baseline rounded-xl px-2 py-1 select-none ${
          isActive ? 'bg-blue-600' : 'bg-blue-50 lg:bg-white'
        }`}
      >
        <p className={`${isActive ? 'text-white' : 'text-blue-600'} text-sm w-full`}>{label}</p>
      </motion.div>
    </Link>
  );
}

export default NavbarItem;
