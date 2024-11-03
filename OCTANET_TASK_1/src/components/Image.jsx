import React, { useState } from 'react'
import { motion,AnimatePresence } from 'framer-motion'

const Image = ({src , info, heading}) => {
  const [click,setClick] = useState(false);

  console.log(src,info)
  return (
    <div className={`w-full h-full relative overflow-hidden`}>
        <AnimatePresence>
          {/* Image */}
          <motion.img
          key={src} 
          initial={{opacity : 0}}
          animate={{opacity : 1}}
          exit={{opacity : 0}}
          transition={{duration : 0.4 , ease: 'circInOut'}}
          src={src} alt="" className='w-[100vw] h-[100vh] object-contain'/>

          {/* Information */}
          {click && <motion.div
          className='h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-end'>
            <motion.div 
            initial={{x : '-80vw'}}
            animate={{x : 0}}
            exit={{x : '80vw'}}
            transition={{type : 'spring'}}
            className='px-4 py-10 bg-black/60 text-white'>
              <h1 className='btn-font text-5xl mb-5'>{heading}</h1>
              <p className='text-lg text-yellow-200 info-font'>{info}</p>
            </motion.div>
          </motion.div>}
        </AnimatePresence>

        <motion.div 
        whileHover={{scale : 1.2 , backgroundColor : 'white'}}
        transition={{duration: 0.4, ease : 'backInOut'}}
        className='absolute bottom-10 right-12 z-30 rounded-full'>
          <button onClick={() => setClick(!click)} className='px-5 py-2 w-full h-full text-lg btn-font text-black rounded-full border-2 border-white'>About</button>
        </motion.div>
    </div>
  )
}

export default Image