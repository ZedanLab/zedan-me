import React from 'react';
import { motion } from 'framer-motion';

export default function WorkHistory({
  experience = [
    {
      title: 'Software Team Leader',
      company: 'Sobek IT (Pty) Ltd | Johannesburg, South Africa (Egypt Branch)',
      duration: '2020 – 2021',
      description: [
        'Analyzes, debugs and assists in problem solving in both development and production environments',
        'Assist in development of software technical documentation',
        'Work with team members to provide timely and accurate estimates for development solutions',
        'Work with management board to provide strategic direction for each phase',
        'Manage multiple and sometimes competing priorities and tasks within work team',
        'Drive software solutions to completion on time while providing regular status updates',
        'Provide mentoring, guidance, feedback and training to team members',
      ],
    },
    {
      title: 'Senior Backend Developer',
      company: 'Sobek IT (Pty) Ltd | Johannesburg, South Africa (Egypt Branch)',
      duration: '2018 – 2020',
      description: [
        'Build infrastructure, toolset and deployment pipeline to support API development.',
        'Design and develop robust services in coordination with frontend developers and produce well-tested, high quality code.',
        'Work directly with the business to implement features and understand use cases.',
        'Architect solutions to business and technical problems that use current technologies.',
      ],
    },
    {
      title: 'Founder',
      company: 'ArinaSystems | 6th of October, Giza, Egypt',
      duration: '2015 – 2019',
      description:
        'In Arina Systems, we are working to provide technical solutions for start-ups and medium-sized companies through web, mobile applications and embedded systems. In addition, we are developing the systems and applications as outsourcing to other companies.',
    },
    {
      title: 'Co-Founder & President',
      company: 'GeekGuys Team | 6th of October, Giza, Egypt',
      duration: '2014 – 2017',
      description: [
        'GeekGyus is a student activity at 6th of October University.',
        'Providing workshops and training courses for students wishing to enter the field of information technology.',
        'Training students to work in the real market through ArinaSystems agency.',
        'Training and equipping students to run well-known technical competitions.',
      ],
    },
    {
      title: 'Freelance Web Developer',
      company: 'Worldwide',
      duration: '2010 – 2020',
      description: [
        'Developing web apps and taking them out with the highest possible quality.',
        'Write efficient clean code.',
        'Analytical thinking and problem-solving abilities.',
        'Understanding and analyzing user requirements.',
        'Creative thinking and product design.',
        'Test-based development of code.',
        'Communication skills and writing skills for documentations.',
      ],
    },
    {
      title: 'Technical Support Manager',
      company: 'Khubraa Host | Iraq - Remotely',
      duration: '2009 – 2010',
      description: [
        'Managing multiple sites for different clients through cPanel / WHM control panel.',
        'Maintaining and managing vBulletin - Wordpress - Joomla sites.',
        'Maintaining and managing Linux / Windows web hosting servers.',
      ],
    },
    {
      title: 'Technical Support Agent',
      company: 'Wasila Tek 4 Web Service | Saudi Arabia - Remotely',
      duration: '2008 – 2010',
      description: [
        'Managing multiple sites for different clients through cPanel.',
        'Maintaining and managing vBulletin - Wordpress - Joomla sites.',
      ],
    },
  ],
}) {
  return (
    <section id="work-history" className="mb-14">
      <h1 className="text-gradient py-1 font-extrabold !text-3xl !mt-0 !mb-2">Work History</h1>
      <div className="relative mt-2 text-left">
        {experience.map((job, index) => (
          <div key={index} className="flex items-center relative">
            <div className="absolute top-2 ml-1.5 border-r-2 border-blue-800 h-full z-10">
              <motion.div
                className="absolute -top-1.5 -left-2.7 w-6 h-6 border border-accent rounded-full"
                initial={{ scale: 0.75 }}
                animate={{ scale: 1.15 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                <div className="absolute top-1 left-1 w-3.5 h-3.5 m-auto bg-accent rounded-full justify-center" />
              </motion.div>
            </div>

            <div className="ml-8">
              <div className="font-bold">{job.title}</div>
              <div className="italic">{job.company}</div>
              <div className="mb-4 mt-2">
                <div className="font-bold text-xs">{job.duration}</div>
              </div>
              {Array.isArray(job.description) ? (
                <ul className="mb-10">
                  {job.description.map((item, descriptionIndex) => (
                    <li key={descriptionIndex}>{item}</li>
                  ))}
                </ul>
              ) : (
                <div className="mb-10">{job.description}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
