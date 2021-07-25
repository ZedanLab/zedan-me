import React from 'react';

export default function EmailIcon({ email }) {
  return (
    <div className="group">
      <a href={`mailto:${email}`}>
        <div className="rounded-full group-hover:bg-blue-600 transition-all group-hover:-translate-y-2 p-2">
          <svg
            width="18"
            height="18"
            className="text-gray-700 fill-current group-hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330 330"
          >
            <defs />
            <path d="M165 0C74 0 0 74 0 165s74 165 165 165a15 15 0 000-30c-74.4 0-135-60.6-135-135S90.6 30 165 30s135 60.6 135 135v37.5a22.5 22.5 0 01-45 0V165a90.1 90.1 0 00-180 0 90.1 90.1 0 00155.8 61.4 52.5 52.5 0 0099.2-23.9V165C330 74 256 0 165 0zm0 225a60 60 0 11.1-120.1A60 60 0 01165 225z" />
          </svg>
        </div>
      </a>
    </div>
  );
}
