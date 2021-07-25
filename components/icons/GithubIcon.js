import React from 'react';

export default function GithubIcon({ link }) {
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
            <path d="M12.3 21.5c3.7 0 9 0 10.8-3.7.7-1.5.9-3.1.9-4.7 0-2-.6-4-2-5.7.3-.7.4-1.5.4-2.3 0-1.1-.2-1.6-.7-2.6-2.2 0-3.7.4-5.4 1.7a19.4 19.4 0 00-8.5 0 7.9 7.9 0 00-5.4-1.7c-.5 1-.7 1.5-.7 2.6 0 .8.1 1.6.4 2.4A8.5 8.5 0 000 13c0 1.6.3 3.3 1 4.7 2 3.8 7.5 3.7 11.3 3.7zM7 11.5c1 0 1.9.2 2.8.3 3.4.5 5.2-.3 7.3-.3 2.3 0 3.7 2 3.7 4.1 0 4.3-4 5-7.5 5h-2.5c-3.5 0-7.5-.7-7.5-5 0-2.2 1.4-4 3.7-4z" />
            <path d="M16.7 18.3c1.2 0 1.8-1.7 1.8-2.7s-.6-2.7-1.8-2.7-1.9 1.7-1.9 2.7.6 2.7 1.9 2.7zM7.5 18.3c1.3 0 1.8-1.7 1.8-2.7s-.5-2.7-1.8-2.7-1.9 1.7-1.9 2.7.6 2.7 1.9 2.7z" />
          </svg>
        </div>
      </a>
    </div>
  );
}
