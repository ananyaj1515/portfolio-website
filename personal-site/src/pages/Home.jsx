import React from 'react'
import { useFrame } from '@react-three/fiber';
import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';


import Room from '../models/Room';
import Sky from '../models/Sky';


import HomeInfo from '../components/HomeInfo';
import WelcomeInfo from '../components/WelcomeInfo';

import bg from '../assets/imgs/nights.jpg'
import { OrbitControls, Preload } from '@react-three/drei';
 {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                POPUP
   </div> */}

const Home = () => {

    const adjustRoomForScreensize = () => {
        let screenScale = null;
        let screenPosition = [0, -5.5, -18];
        let screenRotation = [0.3, 0.75, 0];
        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        } else {
             screenScale = [1, 1, 1];
        }
        return [screenScale, screenPosition, screenRotation];
    }

    const [roomScale, roomPosition, roomRotation] = adjustRoomForScreensize();

    const [isRotating, setIsRotating] = useState(false);

    return (
        <section
      className="w-full h-screen relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
            <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                <HomeInfo  />
            </div>
            <Canvas 
                className={`w-full h-screen bg-black ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                style={{ touchAction: 'none' }}
                camera={{ near: 0.1, far: 1000 }}
            >
               
               <Suspense fallback={<Loader />}>
                    <directionalLight position={[3, 1, 1]} intensity={2}/>
                    <ambientLight intensity={1}/>
                    <hemisphereLight skyColor="#b1be1ff" groundColor="#000000" intensity={1}/>
                    <OrbitControls enableDamping={true} enableRotate={true}/>
                    <Sky />
                
                        
                         <Room 
                        position={roomPosition}
                        scale={roomScale}
                        rotation={roomRotation}
                       
                    />
                   
               </Suspense>
            </Canvas>
             <div className='absolute bottom-12 left-0 right-0 z-10 flex items-center justify-center'>
                <WelcomeInfo  />
            </div>
            
        </section>
    )
}

export default Home;