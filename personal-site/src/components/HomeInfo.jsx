import React from 'react';

const HomeInfo = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <h1
        className="sm:text-lg text-base text-center text-purple-300 px-6 py-4 mx-4 rounded-lg border border-blue-600 shadow-md bg-[#1a1a2e] backdrop-blur-sm"
        style={{
          textShadow: '0 0 4px #a855f7, 0 0 8px #7e22ce',
          boxShadow: '0 0 6px #7e22ce, 0 0 12px #6b21a8',
        }}
      >
        Hi! I am <span className="text-white font-semibold">Ananya</span> 🦋
        <br />
        <span className="text-purple-200"></span>
      </h1>
    </div>
  );
};

export default HomeInfo;
