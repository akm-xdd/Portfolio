import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Travandoz from '../public/assets/projects/office.jpg';
import PIE from '../public/assets/projects/PIE.jpg'
import text from '../public/assets/projects/text.png'
import Dolphin from '../public/assets/projects/DolphinLogo.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl font-bold tracking-widest uppercase text-[#7843e6]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Travandoz'
            backgroundImg={Travandoz}
            projectUrl='https://github.com/akm-xdd/travandoz'
            tech='Python DJango'
          />
          <ProjectItem
            title='Python Image Editor'
            backgroundImg={PIE}
            projectUrl='https://github.com/akm-xdd/Python-Image-Editor'
            tech='Python TKinter PILLOW'

          />
          <ProjectItem
            title='Java Text Editor'
            backgroundImg={text}
            projectUrl='https://github.com/akm-xdd/Java-Text-Editor'
            tech='JAVA Swing'

          />
          <ProjectItem
            title='Dolphin App'
            backgroundImg={Dolphin}
            projectUrl='https://github.com/akm-xdd/Dolphin-app'
            tech='Android'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
