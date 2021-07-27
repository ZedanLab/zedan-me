import React from 'react';

export default function Anchor({ className = '', href = '#', children, onClick = () => {} }) {
  return (
    <div className="group">
      <a
        href={href}
        target="_blank"
        onClick={onClick}
        className={`text-gray-800 group-hover:text-blue-600 group-hover:text-gradient group-hover:animate-moving ${className}`}
        rel="noreferrer"
      >
        {children}
      </a>
    </div>
  );
}
