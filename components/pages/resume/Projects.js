import React from 'react';
import ProjectCard from '../../ProjectCard';

export default function Projects({
  projects = [
    {
      name: 'iPharma',
      brief: 'Digital pharma business solutions.',
      link: 'https://ipharmame.com/',
    },
    {
      name: 'Na7la Egypt',
      brief: 'An online grocery and delivery service for individuals and businesses.',
      link: 'https://kalendarday.com/',
    },
    {
      name: 'KalendarDay',
      brief: 'Advanced project management tool.',
      link: 'https://kalendarday.com/',
    },
    {
      name: 'Sobekit.co.za',
      brief: 'Sobek IT (Pty) Ltd. is a virtual infrastructure company​.',
      link: 'https://Sobekit.co.za/',
    },
    {
      name: 'Kadas',
      brief: 'A smart management and office platform.',
      link: 'https://kadas.co.za/',
    },
    {
      name: 'Magio',
      brief: 'Connecting customers and service providers platform.',
      link: 'https://magio.app/',
    },
    {
      name: 'KadasFundi',
      brief: 'A remote learning platform that creates a virtual school.',
      link: 'https://kadasfundi.com/',
    },
    {
      name: 'ÉYU',
      brief: 'A videotelephony and online chat application.',
      link: 'https://eyuchat.com/',
    },
  ],
}) {
  return (
    <section id="projects" className="mb-14">
      <h1 className="text-gradient py-1 font-extrabold !text-3xl !mt-0">Real-World Projects</h1>
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
