import React from 'react';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import SideNav from './SideNav';
import Anchor from '../Anchor';
import EmailIcon from '../icons/EmailIcon';
import GithubIcon from '../icons/GithubIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import MarkerIcon from '../icons/MarkerIcon';

function Container({ props, classes = '', children, route }) {
  return (
    <div
      {...props}
      className={`flex flex-col items-center lg:h-screen justify-center w-full min-w-min ${classes}`}
    >
      <Navbar />
      <main className="flex flex-col lg:flex-row drop-shadow-2xl lg:rounded-l-3xl overflow-hidden">
        <div className="bg-gray-100 p-4 lg:p-10 text-center flex flex-col lg:max-h-[80vh] overflow-y-auto">
          <div className="flex lg:flex-col justify-center items-center gap-x-5 p-2">
            <div className="h-24 w-24 lg:h-52 lg:w-52 rounded-full shadow-md overflow-hidden bg-gradient-custom hover:animate-moving p-1">
              <div className="rounded-full border-2 border-gray-50">
                <Image
                  layout="responsive"
                  className="rounded-full"
                  src="/assets/images/zedan.jpg"
                  width="188px"
                  height="188px"
                  alt="Mohamed Zedan"
                />
              </div>
            </div>
            <div className="text-center mt-2">
              <p className="font-ubuntu text-2xl">
                Mohamed
                <span className="font-extrabold">Zedan</span>
              </p>
              <p className="font-ubuntu text-white bg-blue-600 rounded-2xl px-3 py-1 mt-2 inline-block">
                Software Engineer
              </p>
            </div>
          </div>
          <hr className="my-3 shadow-2xl text-gray-400" />
          <div className="self-center">
            <div className="flex items-center justify-center space-x-3">
              <EmailIcon email="mo@zedan.me" />
              <GithubIcon link="https://github.com/ZedanLab/" />
              <LinkedinIcon link="https://linkedin.com/in/mozedan/" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <Anchor
                  className="flex gap-1 items-center"
                  href="https://www.instagram.com/myegypt"
                >
                  <MarkerIcon />
                  Cairo, Egypt
                </Anchor>
              </div>
            </div>
          </div>
          <AnimatePresence exitBeforeEnter>
            <SideNav key={route} />
          </AnimatePresence>
        </div>
        <AnimatePresence exitBeforeEnter>
          <div
            key={route}
            className="text-gray-500 font-serif bg-white w-screen overflow-x-hidden overflow-y-visible lg:overflow-y-scroll h-full lg:h-[700px] p-6 md:p-10 prose lg:max-w-[75ch] xl:max-w-[85ch] scroll-smooth lg:max-h-[80vh]"
          >
            {children}
          </div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default Container;
