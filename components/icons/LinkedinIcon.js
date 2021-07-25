import React from 'react';

export default function LinkedinIcon({ link }) {
  return (
    <div className="group">
      <a href={link} target="_blank" rel="noreferrer">
        <div className="rounded-full group-hover:bg-blue-600 transition-all group-hover:-translate-y-2 p-2">
          <svg
            width="18"
            height="18"
            className="text-gray-700 fill-current group-hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <defs />
            <path d="M24 24v-8.8c0-4.3-1-7.6-6-7.6-2.4 0-4 1.3-4.7 2.6V8H8.5v16h5v-8c0-2 .4-4 3-4 2.5 0 2.5 2.3 2.5 4.2V24zM.4 8h5v16h-5zM2.9 0a2.9 2.9 0 000 5.8 3 3 0 002.9-3c0-1.5-1.3-2.8-3-2.8z" />
          </svg>
        </div>
      </a>
    </div>
  );
}
