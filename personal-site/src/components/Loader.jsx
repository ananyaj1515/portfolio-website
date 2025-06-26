import React from 'react'
import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
  const { progress } = useProgress()

  return (
    <Html center>
      <div className="flex flex-col items-center font-techno">
        <div className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent 
        text-xl md:text-2xl font-bold mb-4 neon-glow
        font-mono">
          Loading {Math.floor(progress)}%
        </div>
        <div className="w-48 h-2 bg-cyan-900 rounded-full overflow-hidden shadow-lg">
          <div
            className="h-full bg-gradient-to-r from-pink-400 to-purple-500 transition-all duration-300 font-serif"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </Html>
  )
}

export default Loader
