"use client";
import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TypeAnimation } from 'react-type-animation';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { BackgroundLines } from './ui/BackgroundLines';

function Hero() {
  return (
    <div className="pb-20 pt-16 relative" id="hero">
      <div>
        <Spotlight className="-top-40 -left-10 md:left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="lightblue" />
      </div>

      {/* Background for the main section */}
      <div className="h-[100vh] w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        <BackgroundLines className=" absolute pointer-events-none inset-0 flex items-center justify-center w-full flex-col px-4 dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
      
      <p >
        
      </p>
    </BackgroundLines>
        
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center relative my-20 z-10 space-y-6">
        {/* Profile Image */}
        <img
          className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] rounded-full border-2 border-white shadow-md object-cover"
          src="./profilephoto_processed.jpg"
          alt="Profile"
        />

        {/* Heading */}
        <div className="text-center">
          <h2 className="uppercase tracking-widest text-l text-blue-100">
            Hello, I&apos;m <span className="text-orange-600 text-xl">Arun Wosti.</span>
          </h2>
          <TypeAnimation
            className="text-xl font-bold text-center md:text-4xl lg:text-5xl"
            sequence={[
              'Fullstack Developer 💻',
              500,
              'Enthusiastic Developer 🥇',
              500,
              'Next JS / MERN 🌐',
              500,
            ]}
            repeat={Infinity}
          />
          <p className="text-center lowercase mt-2 md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
            Knack of building applications with{' '}
            <span className="uppercase font-bold text-purple">MERN</span> Stack technology.
          </p>

          <a href="#about">
            <MagicButton title="Show my work" icon={<FaLocationArrow />} position="right" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
