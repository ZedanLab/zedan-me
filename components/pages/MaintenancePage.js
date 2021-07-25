import React from 'react';
import Image from 'next/image';

export default function MaintenancePage() {
  return (
    <div className="px-10 flex flex-col md:flex-row gap-4 items-center h-screen justify-center w-full">
      <div className="flex flex-col gap-3">
        <h2 className="font-ubuntu text-2xl md:text-4xl font-semibold text-gray-700">
          Yeah, It is
        </h2>
        <h1 className="font-ubuntu text-4xl md:text-6xl font-bold text-gradient">
          Mohamed Zedan&apos;s Website
        </h1>
        <p className="mt-3 text-lg">
          I&apos;m working on great stuff right now, I&apos;ll be glad you&apos;re back soon.
        </p>
      </div>
      <Image
        src="/assets/images/maintenance.svg"
        width="500px"
        height="500px"
        alt="under maintenance"
      />
    </div>
  );
}
