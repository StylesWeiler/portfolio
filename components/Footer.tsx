/* eslint-disable @next/next/no-img-element */

"use client";

import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
    const searchForSite = (link: string) => {
        window.open(link, "_blank", "noopener,noreferrer");
    };

  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5' id="contact">
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
            Want to learn more about how I can <span className='text-purple'>impact</span> your business?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>Shoot me a message!</p>
        <a href="mailto:n.stylesweiler@gmail.com">
            <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}   
                position='right'         
            />
        </a>      
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Styles Weiler
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              onClick={() => searchForSite(info.link)}
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer
