import React from 'react';
import { useRouter } from 'next/router';
import LinkButton from '../LinkButton';

export default function SideNav() {
  const router = useRouter();
  let items = <></>;
  if (router.asPath === '/' || router.asPath.startsWith('/#')) {
    items = (
      <>
        <LinkButton replace href="/resume">
          My Resume
        </LinkButton>
        <LinkButton replace href="/#write-testimonial">
          Write a Testimonial
        </LinkButton>
      </>
    );
  } else if (router.asPath.startsWith('/resume')) {
    items = (
      <>
        <LinkButton replace href="/resume/#work-history">
          Work History
        </LinkButton>
        <LinkButton replace href="/resume/#skills">
          Skills
        </LinkButton>
        <LinkButton replace href="/resume/#projects">
          Projects
        </LinkButton>
        <LinkButton replace href="/resume/#open-source">
          Open Source
        </LinkButton>
      </>
    );
  }

  return (
    <nav className="flex lg:flex-col justify-center space-x-2 lg:space-x-0 lg:space-y-3 mt-3">
      {items}
    </nav>
  );
}
