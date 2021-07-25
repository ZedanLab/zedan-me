/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const [skills] = useState([
    {
      name: 'PHP',
      level: 'Expert',
      category: 'Languages',
    },
    {
      name: 'Java',
      level: 'Novice',
      category: 'Languages',
    },
    {
      name: 'JavaScript',
      level: 'Proficient',
      category: 'Languages',
    },
    {
      name: 'SQL',
      level: 'Expert',
      category: 'Languages',
    },
    {
      name: 'HTML',
      level: 'Expert',
      category: 'Languages',
    },
    {
      name: 'CSS',
      level: 'Expert',
      category: 'Languages',
    },
    {
      name: 'Python',
      level: 'Novice',
      category: 'Languages',
    },

    {
      name: 'Laravel',
      level: 'Expert',
      category: 'Technologies',
    },
    {
      name: 'VueJS',
      level: 'Proficient',
      category: 'Technologies',
    },
    {
      name: 'NuxtJS',
      level: 'Proficient',
      category: 'Technologies',
    },
    {
      name: 'Bootstrap',
      level: 'Expert',
      category: 'Technologies',
    },
    {
      name: 'Tailwind CSS',
      level: 'Expert',
      category: 'Technologies',
    },
    {
      name: 'ReactJS',
      level: 'Expert',
      category: 'Technologies',
    },
    {
      name: 'NextJS',
      level: 'Proficient',
      category: 'Technologies',
    },
    {
      name: 'WordPress',
      level: 'Proficient',
      category: 'Technologies',
    },

    {
      name: 'Object Oriented Programming',
      level: 'Expert',
      category: 'Concepts',
    },
    {
      name: 'Data Structures',
      level: 'Proficient',
      category: 'Concepts',
    },
    {
      name: 'Design Patterns',
      level: 'Proficient',
      category: 'Concepts',
    },
    {
      name: 'RESTful API',
      level: 'Expert',
      category: 'Concepts',
    },
    {
      name: 'Database Design',
      level: 'Expert',
      category: 'Concepts',
    },
    {
      name: 'Responsive Web Design',
      level: 'Expert',
      category: 'Concepts',
    },
    {
      name: 'SEO',
      level: 'Expert',
      category: 'Concepts',
    },
    {
      name: 'SOLID Principles',
      level: 'Expert',
      category: 'Concepts',
    },

    {
      name: 'WHM / cPanel',
      level: 'Expert',
      category: 'Tools',
    },
    {
      name: 'Plesk',
      level: 'Proficient',
      category: 'Tools',
    },
    {
      name: 'Docker',
      level: 'Proficient',
      category: 'Tools',
    },
    {
      name: 'Git',
      level: 'Proficient',
      category: 'Tools',
    },
    {
      name: 'Github',
      level: 'Proficient',
      category: 'Tools',
    },
    {
      name: 'Bitbucket',
      level: 'Proficient',
      category: 'Tools',
    },
    {
      name: 'Linux / Ubuntu',
      level: 'Proficient',
      category: 'Tools',
    },
    {
      name: 'Adobe Photoshop',
      level: 'Proficient',
      category: 'Tools',
    },
    {
      name: 'Adobe InDesign',
      level: 'Proficient',
      category: 'Tools',
    },
    {
      name: 'Adobe XD',
      level: 'Novice',
      category: 'Tools',
    },
    {
      name: 'Figma',
      level: 'Novice',
      category: 'Tools',
    },
  ]);

  const [filters, setFilters] = useState([]);
  const [filtered, setFiltered] = useState(skills);
  const [categories] = useState(
    skills.map(({ category }) => category).filter((x, i, a) => a.indexOf(x) === i)
  );
  const [levels] = useState(['Expert', 'Proficient', 'Novice']);

  useEffect(() => {
    setFiltered(
      filters.length > 0
        ? skills.filter(
            ({ category, level }) => filters.includes(category) || filters.includes(level)
          )
        : skills
    );
  }, [filters, skills]);

  function filter(term) {
    if (filters.includes(term)) {
      setFilters(filters.filter((value) => value !== term));
      return;
    }

    setFilters((currentFilters) => [...currentFilters, term]);
  }

  return (
    <section id="skills" className="mb-14">
      <h1 className="text-gradient py-1 font-extrabold !text-3xl !mt-0 !mb-1">Skills</h1>
      <div className="">
        <div className="text-right">
          {[...categories, ...levels].map((filterName) => (
            <div
              key={filterName}
              className={`m-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full ${
                filters.includes(filterName) ? 'bg-accent' : 'bg-gradient-custom animate-moving'
              } text-white select-none hover:cursor-pointer`}
              onClick={() => filter(filterName)}
              onKeyPress={() => filter(filterName)}
              role="button"
              tabIndex={0}
            >
              {filters.includes(filterName) && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              )}
              {filterName}
            </div>
          ))}
        </div>
      </div>

      {filtered.map((skill) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0.6 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          key={skill.name}
          className="m-2 text-sm inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full hover:bg-gradient-custom hover:animate-moving hover:text-white select-none"
        >
          {skill.name}
        </motion.div>
      ))}
    </section>
  );
}
