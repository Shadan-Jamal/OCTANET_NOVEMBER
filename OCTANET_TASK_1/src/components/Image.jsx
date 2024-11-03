import React from 'react'
import { motion,AnimatePresence } from 'framer-motion'
const Image = ({src , info}) => {
  console.log(src,info)
  return (
    // <div className={`w-full h-full`}>
        <AnimatePresence>
          <motion.img
          key={src} 
          initial={{opacity : 0}}
          animate={{opacity : 1}}
          exit={{opacity : 0}}
          transition={{duration : 0.4 , ease: 'circInOut'}}
          src={src} alt="" className='w-[100vw] h-[100vh] object-contain'/>
          <motion.div className='w-[100px] h-fit'>
            <p className='text-3xl text-black'>{info}</p>
          </motion.div>
        </AnimatePresence>
    // </div>
  )
}

export default Image