import React from 'react';

export default function MarkerIcon() {
  return (
    <div className="rounded-full group-hover:bg-blue-600 p-2">
      <svg
        width="18"
        height="18"
        className="text-gray-700 fill-current group-hover:text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <defs />
        <path d="M256 0C148.48 0 61 87.48 61 195c0 42.55 13.44 82.98 38.9 116.9l144.08 194.05c.36.47.91.65 1.31 1.07 7.2 7.71 17.59 5.77 22.72-1.07C309.5 450.6 385.55 347.2 414.79 308.2l.02-.05.18-.24A193.6 193.6 0 00451 195C451 87.48 363.52 0 256 0zm0 300.2c-57.89 0-105.2-47.31-105.2-105.2S198.11 89.8 256 89.8 361.2 137.11 361.2 195 313.89 300.2 256 300.2z" />
      </svg>
    </div>
  );
}
