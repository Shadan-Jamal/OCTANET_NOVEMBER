import React, { useState } from 'react'
import { motion,AnimatePresence } from 'framer-motion'

const Image = ({src , info, heading}) => {
  const [click,setClick] = useState(false);

  return (
    <div className={`w-full h-screen relative overflow-hidden`}>
        <AnimatePresence>
          {/* Image */}
          <motion.img
          key={heading} 
          initial={{opacity : 0}}
          animate={{opacity : 1}}
          exit={{opacity : 0}}
          transition={{duration : 0.4 , ease: 'circInOut'}}
          src={src} alt="" className='w-[100vw] h-[83vh] object-contain absolute bottom-1'/>

          {/* Information */}
          {click && <motion.div
          className='w-[65%] absolute -bottom-4 left-1/2 -translate-x-1/2 flex justify-end items-end'>
            <motion.div 
            initial={{scale : 0}}
            animate={{scale : 0.8}}
            exit={{scale : 0, transition : {duration : 0.2}}}
            transition={{duration: 0.4 ,type : 'spring', ease : 'circInOut'}}
            className='px-8 py-8 bg-black/80 text-white rounded-3xl border-[1px]'>
              <motion.h1 initial={{opacity : 0}} animate={{opacity : 1}} transition={{delay : 0.3}} className='btn-font text-5xl mb-5 border-b-[3px] border-white w-fit pb-3'>{heading}</motion.h1>
              <motion.p initial={{opacity : 0}} animate={{opacity : 1}} transition={{delay : 0.3}} lassName='text-lg text-slate-100 info-font text-wrap leading-6'>{info}</motion.p>
            </motion.div>
          </motion.div>}
        </AnimatePresence>

        <motion.div 
        whileHover={{scale : 1.2 , backgroundColor : 'white'}}
        transition={{duration: 0.4, ease : 'backInOut'}}
        className='absolute bottom-10 right-12 z-30 rounded-full'>
          <button onClick={() => setClick(!click)} className='px-5 py-2 w-full h-full text-lg btn-font text-black rounded-full border-2 border-white'>{click ? 'X' : 'About'}</button>
        </motion.div>
    </div>
  )
}

export default Image