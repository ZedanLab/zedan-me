import React from 'react';
import Image from 'next/image';

export default function Custom500() {
  return (
    <div className="px-10 flex flex-col items-center h-full justify-center w-full">
      <h1 className="font-ubuntu text-4xl md:text-6xl font-bold text-gradient !m-0">
        Server Error | 500
      </h1>
      <Image
        src="/assets/images/500.svg"
        width="500px"
        height="500px"
        alt="Server Side Error 500"
      />
    </div>
  );
}
