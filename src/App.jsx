// App.jsx
import React, { useEffect, useLayoutEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Model from './components/model';
import SetBackground from './components/BG'
import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';

import * as THREE from 'three';
import Event from './components/Event';
import './App.css';

function ScrollCamera({ cameraPositions }) {
  const { camera } = useThree();
  const [scrollPercent, setScrollPercent] = useState(0);
  const targetPosition = useRef(new THREE.Vector3());
  const lerpSpeed = 0.05;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    for (let i = 0; i < cameraPositions.length - 1; i++) {
      const current = cameraPositions[i];
      const next = cameraPositions[i + 1];

      if (scrollPercent >= current.scroll && scrollPercent <= next.scroll) {
        const t = (scrollPercent - current.scroll) / (next.scroll - current.scroll);
        const interpolated = new THREE.Vector3().fromArray(current.position).lerp(
          new THREE.Vector3().fromArray(next.position),
          t
        );
        targetPosition.current.copy(interpolated);
        break;
      }
    }

    // Smoothly interpolate camera position toward target
    camera.position.lerp(targetPosition.current, lerpSpeed);
    camera.lookAt(0, 0, 0);
  });

  return null;
}



export default function App() {



  const cameraPositions = [
    { scroll:0, position: [30, 100, -110] },
    { scroll: 50, position: [  30, 8 , -100] },
  
   



  ];

  return (
    <>
      <div className=' fixed top-0 left-0 w-full h-screen'  >
        <Canvas camera={{ position: [3, 10, -100], fov: 70 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 5]} intensity={1} />
          <Model scale={1} />
          <SetBackground imageUrl="/bg.png" />
          {/* <OrbitControls /> */}
          <Environment preset="dawn" />
          <ScrollCamera cameraPositions={cameraPositions} />
        </Canvas>
      </div>

      <div className="scroll-content relative">
        <section style={{ height: '400vh', padding: '0rem', color: 'white' }} >
          <div  className='h-full w-full py-40'>
                <div className='h-10  w-full  mb-10 flex items-center justify-center'>
                 <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" className='w-full h-full ' alt="" />
                </div>
              <div className='bebas-neue-regular p-1 w-full text-[150px] flex items-center justify-center rounded-xl shadow-2xl  bg-[#EE232C] text-white  '>
                  <h1 className='avenger px-4 leading-60  '>
                    Compufest 2K25
                 </h1>
              </div> 

          </div>
              

                <div className='h-max w-full  bg-[#e23636]'>
                {/* <div className='h-screen w-full  bg-[#518cca]'> */}

                    <Event/>
              </div>
        </section>
      </div>

    </>


  );
}
