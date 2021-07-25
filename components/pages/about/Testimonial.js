import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../Image';
import Stars from '../../inputs/Stars';

function Testimonial({ testimonial, animateDirection }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: animateDirection }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -animateDirection }}
      transition={{
        delay: 0.1,
        duration: 0.3,
      }}
      className="select-none"
    >
      <Image alt={testimonial.name} src={testimonial.avatar} blurURL={testimonial.avatarThumb} />
      <div className="text-gray-800 my-2 font-bold">
        {testimonial.name}
        <p className="!mt-1 !font-normal"> {testimonial.position}</p>
      </div>
      <div className="relative inline-block max-w-[25ch] md:max-w-[35ch] lg:max-w-[45ch]">
        <p className="before:content-qoute before:absolute before:text-7xl before:text-blue-600 before:italic before:font-bold !before:font-mono before:top-0 before:-left-6 text-2xl py-6 font-semibold font-xl font-mono !m-0 testimonial-body">
          {testimonial.body}
        </p>
        <Stars value={testimonial.stars} />
      </div>
    </motion.div>
  );
}

export default Testimonial;
