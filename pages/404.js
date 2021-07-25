import React from 'react';
import Image from 'next/image';

export default function Custom404() {
  return (
    <div className="px-10 flex flex-col items-center h-full justify-center w-full">
      <h1 className="font-ubuntu text-4xl md:text-6xl font-bold text-gradient !m-0">
        Page Not Found | 404
      </h1>
      <Image src="/assets/images/404.svg" width="500px" height="500px" alt="Page Not Found 404" />
    </div>
  );
}
