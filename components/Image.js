import React from 'react';
// eslint-disable-next-line import/no-named-default
import { default as NextImage } from 'next/image';

export default function Image({
  src,
  alt,
  blurURL = '/assets/images/placeholder.png',
  width = '140px',
  height = '140px',
}) {
  return (
    <div className="rounded-full">
      <NextImage
        className="rounded-full"
        src={src}
        width={width}
        height={height}
        alt={alt}
        quality={75}
        blurDataURL={blurURL}
        placeholder="blur"
      />
    </div>
  );
}
