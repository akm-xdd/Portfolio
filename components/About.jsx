import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2 font-bold'>

          <h2 className='py-4 text-[#7834e6]'>About me</h2>
          <p className='py-2 text-gray-600'>
            I am a college student pursuing my B. Sc. (H) Computer Science from the University of Delhi.
            I am currently learning Deep Learning and Neural Networks. 
          </p>
          <p className='py-2 text-gray-600'>
            I have a good understanding of of various programming languages mainly Java and Python. I have completed capstone projects in both of these languages.
            I have participated in multiple hackathons and provided solutions to real-world problems with my team members.
          </p>

          <p className='py-2 text-gray-600'>
            I love to play video games and on Sundays I complete my assignments from previous semesters.
          </p>
          <Link href='https://github.com/akm-xdd'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              You can check out my Github Repo here.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
