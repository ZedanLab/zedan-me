import React from 'react';
import ProjectCard from '../../ProjectCard';

export default function OpenSource({
  projects = [
    {
      name: 'Laravel JSON Response',
      brief: 'Extensible and powerful API response package for Laravel.',
      link: 'https://github.com/arinasystems/laravel-json-response/',
    },
    {
      name: 'Laravel Telr Payment',
      brief: 'Advanced project management tool.',
      link: 'https://github.com/arinasystems/laravel-telr-payment',
    },
    {
      name: 'Laravel Localized Slug',
      brief: 'Easy generation localized slugs for Laravel Eloquent Models.',
      link: 'https://github.com/arinasystems/laravel-localized-slug',
    },
  ],
}) {
  return (
    <section id="open-source" className="mb-14">
      <h1 className="text-gradient py-1 font-extrabold !text-3xl !mt-0">Open Source Projects</h1>
      <div className="overflow-x-auto scrolling-touch">
        <div className="flex flex-grow min-w-max mb-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
