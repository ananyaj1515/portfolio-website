import React from 'react'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import skyScene from '../assets/3d/night.glb'

const Sky = () => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef();

    return (
        <mesh ref={skyRef.current}>
            <primitive object={sky.scene} />
        </mesh>
    )
}

export default Sky;