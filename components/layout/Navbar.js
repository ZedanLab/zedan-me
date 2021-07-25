import React from 'react';
import { useRouter } from 'next/router';
import NavBarItem from './NavbarItem';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="sticky flex justify-center space-x-8 py-2 shadow-lg lg:shadow-inner lg:rounded-t-md overflow-hidden w-full lg:w-72 bg-gray-100 z-50">
      <NavBarItem
        label="About"
        isActive={router.asPath === '/' || router.asPath.startsWith('/#')}
        route="/"
      />
      <NavBarItem label="Resume" isActive={router.asPath.startsWith('/resume')} route="/resume" />
      <NavBarItem
        label="Contact"
        isActive={router.asPath.startsWith('/contact')}
        route="/contact"
      />
    </nav>
  );
}
