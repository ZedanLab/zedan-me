import React from 'react';

export default function StarIcon({ selected }) {
  return (
    <div className="p-1 h-7 w-7">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          className={`text-blue-600 ${selected && 'fill-current'}`}
          fill="#ffffff"
          d="M501.12 198.7c-.85-2.64-2.4-4.91-4.42-6.63a14.33 14.33 0 00-7.21-3.28l-76.27-11.18-76.26-11.19-34.1-69.75-34.11-69.75a14.49 14.49 0 00-5.32-5.91 14.3 14.3 0 00-15.22 0 14.49 14.49 0 00-5.31 5.91l-34.11 69.75-34.11 69.75-76.26 11.19-76.26 11.18a14.55 14.55 0 00-11.92 17.88c.63 2.6 1.96 5 3.93 6.94l55.18 54.3 55.18 54.28-13.02 76.67-13.03 76.66a14.66 14.66 0 005.74 14.23 14.32 14.32 0 0015.18 1.1l68.2-36.19 68.22-36.2 68.21 36.2 68.21 36.2a14.3 14.3 0 0015.18-1.11 14.68 14.68 0 005.74-14.23l-13.03-76.66-13.03-76.67 55.19-54.29 55.19-54.3a14.57 14.57 0 003.64-14.9zM257.7 397.75c.4-2.36 122.12 53.62 122.12 53.62l-58.64-31.11-58.64-31.12a14.3 14.3 0 00-13.42 0l-58.64 31.12-58.64 31.11 51.76-13 74.1-40.62z"
          data-original="#000000"
        />
        <path
          fill="#2663eb"
          d="M511.27 197.26a15 15 0 00-12.11-10.21l-158.72-23.07-70.99-143.82a15 15 0 00-26.9 0l-70.99 143.82-158.72 23.07a15 15 0 00-8.31 25.58L119.38 324.6 92.27 482.67a15 15 0 0021.77 15.81L256 423.85l141.96 74.63a14.98 14.98 0 0015.8-1.14 15 15 0 005.97-14.67L392.6 324.59l114.86-111.96a15 15 0 003.8-15.37zM366.02 308.6a15 15 0 00-4.31 13.28l23.31 135.9-122.04-64.17a15 15 0 00-13.96 0L126.98 457.8l23.3-135.9a15 15 0 00-4.31-13.28l-98.73-96.25 136.44-19.82a15 15 0 0011.3-8.2L256 60.67l61.02 123.65a15 15 0 0011.3 8.2l136.44 19.83-98.74 96.25z"
          data-original="#000000"
        />
      </svg>
    </div>
  );
}
