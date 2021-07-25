import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import LinkButton from '../components/LinkButton';
import CardWithIcon from '../components/CardWithIcon';
import Testimonials from '../components/pages/about/Testimonials';

export default function Home({ testimonials }) {
  const [openSubmitTestimonial, setOpenSubmitTestimonial] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined' || !router.asPath.includes('#write-testimonial')) return;

    // eslint-disable-next-line no-undef
    const element = document.querySelector('#testimonials');

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
      setOpenSubmitTestimonial(true);
    }
  }, [router]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
    >
      <section>
        <h1 className="text-gradient !mb-7">About Me</h1>
        <p className="md:text-justify">
          <span className="text-gradient pr-2 text-2xl font-bold">Hi, </span>I&apos;m a highly
          skilled Software Engineer has a strong background in multiple programming languages and
          platforms. Brings over ten years of professional experience as a back-end developer
          specifically in PHP development. Excellent ability to read code and suggest changes to
          make the finished project glitch free and clean code. I love to motivate the development
          team, find and remove impediments to turning out quality software applications.
        </p>
      </section>
      <LinkButton href="/resume" className="mb-14">
        Check My Professional Experience
      </LinkButton>
      <section className="mb-14">
        <h2 className="text-gradient py-1 font-extrabold !text-3xl !mt-0">Things That I Love</h2>
        <div className="overflow-x-auto scrolling-touch">
          <div className="flex flex-grow min-w-max mb-2">
            <CardWithIcon img="/assets/images/programing.svg" text="Programming" />
            <CardWithIcon img="/assets/images/marketing.svg" text="Marketing" />
            <CardWithIcon img="/assets/images/photography.svg" text="Photography" />
            <CardWithIcon img="/assets/images/sciences.svg" text="Sciences" />
            <CardWithIcon img="/assets/images/movies.svg" text="Movies" />
            <CardWithIcon img="/assets/images/cooking.svg" text="Cooking" />
          </div>
        </div>
      </section>
      <Testimonials testimonials={testimonials} openSubmitTestimonial={openSubmitTestimonial} />
    </motion.div>
  );
}

export async function getStaticProps() {
  let props = {
    // title: "Home",
  };

  const response = await axios.get('https://app.zedan.me/api/testimonials');
  if (response) {
    props = { ...props, testimonials: response.data.data };
  }

  return {
    // eslint-disable-next-line object-shorthand
    props: props,
    revalidate: 30,
  };
}
