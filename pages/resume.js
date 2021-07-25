import React from 'react';
import { motion } from 'framer-motion';
import Skills from '../components/pages/resume/Skills';
import Projects from '../components/pages/resume/Projects';
import OpenSource from '../components/pages/resume/OpenSource';
import WorkHistory from '../components/pages/resume/WorkHistory';

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
    >
      <h1 className="text-gradient !mb-7">My Resume</h1>
      <WorkHistory />
      <Skills />
      <Projects />
      <OpenSource />
    </motion.div>
  );
}

export async function getStaticProps() {
  const props = {
    title: 'My Resume',
  };

  return {
    // eslint-disable-next-line object-shorthand
    props: props,
  };
}
