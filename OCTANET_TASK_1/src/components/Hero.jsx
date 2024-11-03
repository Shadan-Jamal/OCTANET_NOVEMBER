import React from 'react'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <div className='w-screen h-fit absolute z-[9999]'>
      <div className='w-full h-full py-3'>
        <div className='btn-font h-full flex flex-col justify-center items-center gap-6'>
          <motion.h1 className='text-6xl text-black'>Beautiful Landmarks</motion.h1>
          <p className='text-2xl text-white'>Explore an amazing catalogue of stunning landmarks from around the globe!</p>
        </div>
      </div>
    </div>
  )
}

export default Hero