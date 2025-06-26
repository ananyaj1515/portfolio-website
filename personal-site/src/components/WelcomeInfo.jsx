import React from 'react';

const WelcomeInfo = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <h1
        className="sm:text-lg text-base text-center text-purple-300 px-6 py-4 mx-4 rounded-lg border border-purple-600 shadow-md bg-[#1a1a2e] backdrop-blur-sm"
        style={{
          textShadow: '0 0 4px #a855f7, 0 0 8px #7e22ce',
          boxShadow: '0 0 6px #7e22ce, 0 0 12px #6b21a8',
        }}
      >
        Welcome to my <span className="text-white font-semibold">Digital Den</span> 🏠
        <br />
        <p className="text-purple-200">Click around to find out more about me!</p>
      </h1>
    </div>
  );
};

export default WelcomeInfo;
