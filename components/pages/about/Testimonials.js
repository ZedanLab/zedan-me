import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Testimonial from './Testimonial';
import SubmitTestimonial from './SubmitTestimonial';

export default function Testimonials({ openSubmitTestimonial = false, testimonials = [] }) {
  const [currentTestimonial, setCurrentTestimonial] = useState(
    testimonials.length && !openSubmitTestimonial ? 0 : 'submit'
  );
  const [animateDirection, setAnimateDirection] = useState(200);

  useEffect(() => {
    if (openSubmitTestimonial) setCurrentTestimonial('submit');
  }, [openSubmitTestimonial]);

  function navigate(to) {
    setAnimateDirection(200);
    if (to === 'previous') {
      setAnimateDirection(-200);
      setCurrentTestimonial((current) =>
        current === 'submit' ? testimonials.length - 1 : current - 1
      );
    } else if (to === 'next') {
      setCurrentTestimonial((current) =>
        testimonials.length === current + 1 ? 'submit' : current + 1
      );
    } else {
      setCurrentTestimonial(to);
    }
  }

  return (
    <section id="testimonials">
      <h2 className="text-gradient py-1 font-extrabold !text-3xl !mt-0">
        {currentTestimonial === 'submit' ? "What You'll Say About Me?" : 'What People Say About Me'}
      </h2>
      <div className="p-12 md:p-10 !pt-0 w-full text-center relative">
        <div
          title="Pervious"
          className={`absolute top-1/2 left-0 ${
            testimonials.length > 0 && (currentTestimonial > 0 || currentTestimonial === 'submit')
              ? 'cursor-pointer'
              : 'hidden'
          }`}
          onClick={() => navigate('previous')}
          onKeyPress={() => navigate('previous')}
          role="button"
          tabIndex={0}
        >
          <Image
            className="rounded-full"
            src="/assets/images/left-arrow.svg"
            width="45px"
            height="45px"
            alt="Pervious"
          />
        </div>

        <div
          title="Next"
          className={`absolute top-1/2 right-0 ${
            currentTestimonial === 'submit' ? 'hidden' : 'cursor-pointer'
          }`}
          onClick={() => navigate('next')}
          onKeyPress={() => navigate('next')}
          role="button"
          tabIndex={0}
        >
          <Image
            className="rounded-full"
            src="/assets/images/right-arrow.svg"
            width="45px"
            height="45px"
            alt="Next"
          />
        </div>

        <AnimatePresence exitBeforeEnter>
          {testimonials?.map(
            (testimonial, index) =>
              currentTestimonial === index && (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  animateDirection={animateDirection}
                />
              )
          )}
        </AnimatePresence>

        {currentTestimonial === 'submit' && <SubmitTestimonial />}

        <div className="mt-10 flex flex-wrap justify-center gap-2 select-none">
          {testimonials?.map((testimonial, index) => (
            <div
              key={index}
              title={testimonial.creator}
              className={`border-4 border-blue-600 w-5 h-5 rounded-full ${
                currentTestimonial === index ? 'cursor-default bg-blue-600' : 'cursor-pointer'
              }`}
              onClick={() => navigate(index)}
              onKeyPress={() => navigate(index)}
              role="button"
              tabIndex={0}
              label={testimonial.creator}
            />
          ))}
          <motion.div
            initial={{ scale: 0.75 }}
            animate={{ scale: 1.25 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className={`border-4 border-rose-600 w-5 h-5 rounded-full ${
              currentTestimonial === 'submit' ? 'cursor-default bg-rose-600' : 'cursor-pointer'
            }`}
            onClick={() => navigate('submit')}
            role="button"
            tabIndex={0}
          />
        </div>
      </div>
    </section>
  );
}
