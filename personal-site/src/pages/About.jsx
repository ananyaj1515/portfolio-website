import React from 'react';
import backgroundImage from '../assets/imgs/nights.jpg'; // adjust path if needed
import { skills } from '../constants';

const About = () => {
  return (
    <section
      className="w-full min-h-screen flex justify-center items-start overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="p-10 pt-20 max-w-5xl w-full min-h-screen bg-[#1a1c2c] text-white">
        <h1 className="text-2xl font-bold">
          Hello, I am{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Ananya
          </span>
        </h1>

        <p className="mt-4">
          Computer Science student at NUS, specializing in AI and Computer Graphics. 
          I'm passionate about building intelligent and visually expressive systems that blend creativity and computation.
        </p>

        <div className="py-10 flex flex-col">
          <h3 className="subhead-text">My Skills:</h3>
        <div className="pl-10 mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 w-full">
            {skills.map((skill) => (
                <div className='block-container w-20 h-20'>
                    <div className='btn-front bg-blue-300 bg-opacity-15 rounded-xl flex justify-center items-center'>
                        <img
                            src={skill.imageUrl}
                            alt={skill.name}
                            className="w-12 h-12 object-contain"/>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
