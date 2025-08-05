// App.jsx
import React, { useEffect, useLayoutEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Model from './components/Model';
import SetBackground from './components/BG'
import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Suspense } from 'react';
import Loader from "./lib/utils/Loader"
import OurSponsors from './components/OurSponsors';
import Footer from './components/Footer';
import * as THREE from 'three';
import Event from './components/Event';
import './App.css';
import CoreCommittee from './components/CoreCommittee';
import { useLenis } from './lib/utils/lenis';
import { motion, AnimatePresence } from 'framer-motion';


function ScrollCamera({ cameraPositions }) {
  const { camera } = useThree();
  const [scrollPercent, setScrollPercent] = useState(0);
  const targetPosition = useRef(new THREE.Vector3());
  const lerpSpeed = 1;



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

  useLenis()
const [loadingDone, setLoadingDone] = useState(false);

  const cameraPositions = [
    { scroll: 0, position: [30, 100, -110] },
    { scroll: 20, position: [30, 8, -100] },
    { scroll: 30, position: [-60, 8, -100] },
    { scroll: 40, position: [-80, 58, -50] },
    { scroll: 60, position: [-100, 60, 100] },

    { scroll: 150, position: [140, 10, 130] },

  ];

  return (
    <>
      {/* <ContinuousMusic /> */}
      <div className=' w-96 fixed top-0 left-0 md:w-full h-full  md:h-screen '  >
        <Canvas shadows dpr={[1, 2]}  camera={{ position: [3, 10, -100], fov: 70 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 5]} intensity={1} />
         <Suspense fallback={<Loader Loadingdata={loadingDone} setLoadingDone ={setLoadingDone}  />}>

  <Model />
  <SetBackground imageUrl="/bg.png" />
  <Environment
    files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/kiara_1_dawn_1k.hdr"
  />
</Suspense>
          <ScrollCamera cameraPositions={cameraPositions} />
        </Canvas>
      </div>
    


      <div className="scroll-content relative overflow-hidden">


<AnimatePresence>
  {loadingDone !== "100" && (
    <motion.div
      key="loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="h-screen w-full fixed top-0 text-white avenger text-3xl bg-[#EE232C] flex items-center justify-center z-50"
    >

    
      <h1 className='mr-5' >{loadingDone}</h1> 
      <p>Loading..</p>
    </motion.div>
  )}
</AnimatePresence>



        <section style={{ minHeight: '400vh', padding: '0rem', color: 'white' }} >
          <div className='h-[1400vh] w-full py-40 z-10 relative'>
            <div className='h-10  w-full  mb-10 flex items-center justify-center'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" className='w-full h-full ' alt="" />
                </div>
              <div className='bebas-neue-regular p-1  z-10 w-full text-6xl md:text-[150px] flex items-center justify-center  shadow-2xl  bg-[#EE232C] text-white  '>
                  <h1 className='avenger px-4 md:leading-60 leading-40 whitespace-nowrap  '>
                    Compufest 2K25
                </h1>
              </div> 

              <div className='h-80 w-[30rem]  top-[40%] left-10 py-10 absolute  '>
                  
                        <h1 className=' text-8xl text-[#e8101b]  avenger  opacity-80 '> <span className='bg-[#E8101B] text-white px-10 py-2  rounded-l-xl rounded-r-xl '> What is</span>   <span className='whitespace-nowrap rounded-r-xl rounded-l-xl bg-[#E8101B] text-white px-10'> compufest ?</span>  </h1>
              </div>

                <div className='h-80 w-[30rem]  top-[43%] right-10 py-10 absolute   '>
                        <h1 className=' text-4xl text-white  avenger leading-12 '> Compufest is the TechFest conducted by the C T - Department of YCCE where TECH and Culture Event Takes Place   </h1>
              </div>

          </div>


          <div className='h-max w-full'>
            {/* <div className='h-screen w-full  bg-[#518cca]'> */}

            <Event />
          </div>
          <div>
            <OurSponsors />
          </div>
           
           <div className='h-[200vh] w-full'>
            
          </div>


          <div>
            <CoreCommittee/>
          </div>
            <div className='avenger tracking-widest h-80 w-full bg-red-500 opacity-90 flex items-center justify-center  '>
            <Footer/>
          </div>
        </section>
      </div>

    </>


  );
}
