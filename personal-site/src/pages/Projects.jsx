import React from 'react'
import backgroundImage from '../assets/imgs/nights.jpg'
const Projects = () => {
    return (
       <section
             className="w-full min-h-screen flex justify-center items-start"
             style={{
               backgroundImage: `url(${backgroundImage})`,
               backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
             }}
           >
             <div className="p-10 pt-20 max-w-5xl w-full min-h-screen bg-[#1a1c2c] text-white">
               <h1 className="text-2xl font-bold">
                 My{' '}
                 <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                   Projects
                 </span>
               </h1>
       
               <p className="mt-4">
                Some creative endeavours of mine! 
               </p>
             </div>
        </section>
    )
}

export default Projects;