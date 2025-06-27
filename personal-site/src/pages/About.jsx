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
        <h1 className="subhead-text font-bold">
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
          <h3 className="text-xl font-bold">My Skills:</h3>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
           {[
  { name: "Frontend", gradient: "from-purple-600", bg: "bg-purple-600" },
  { name: "Backend", gradient: "from-blue-600", bg: "bg-blue-600" },
  { name: "AI", gradient: "from-pink-600", bg: "bg-pink-600" },
  { name: "Database", gradient: "from-blue-400", bg: "bg-blue-400" },
  { name: "Language", gradient: "from-pink-400", bg: "bg-pink-400" },
  { name: "Software", gradient: "from-purple-400", bg: "bg-purple-400" },
  { name: "Version Control", gradient: "from-green-100", bg: "bg-green-100" },
].map((type) => (
  <div key={type.name}>
    <h2 className={`text-xl font-semibold mb-4 capitalize bg-gradient-to-r ${type.gradient} to-white bg-clip-text text-transparent `}>
      {type.name}
    </h2>
    <div className={`p-3 grid grid-cols-3 gap-4 ${type.bg} bg-opacity-50 rounded-xl border-[0.5px] border-white items-center`}>
      {skills
        .filter((skill) => skill.type === type.name)
        .map((skill) => (
          <div
            key={skill.name}
            className={`w-20 h-20 border border-white btn-front bg-blue-300 bg-opacity-35 rounded-xl flex justify-center items-center shadow-lg`}
           
          >
            <img
              src={skill.imageUrl}
              alt={skill.name}
              className="w-12 h-12 object-contain"
            />
          </div>
        ))}
    </div>
  </div>
))}

          </div>
      </div>
    </section>
  );
};

export default About;
