import React, { useRef, useState } from 'react'
import Image from './components/Image'
import {motion} from 'framer-motion'
import {data} from './data'

const App = () => {
  const [image , setImage] = useState({src : '/Pictures/amazon.webp', info : 'Amazon'})
  const imageCounter = useRef(0);

  const changeImage = (direction) => {
    if(direction === 'next'){
      ++imageCounter.current;
    
      if(imageCounter.current >= data.length){
        imageCounter.current = 0;
      }
      setImage({...image, src : `${data[imageCounter.current].src}` , info : data[imageCounter.current].info})
    }
    else if(direction === 'previous'){
      --imageCounter.current;
      if(imageCounter.current <= -1){
        imageCounter.current = data.length-1;
      }
      setImage({...image, src : `${data[imageCounter.current].src}` , info : data[imageCounter.current].info})
    }
  }

  return (
    <div className={`w-screen h-screen relative`}>
      <motion.div className='absolute top-1/2 left-14 -translate-x-1/2 -translate-y-1/2'>
        <button onClick={() => changeImage('previous')} className='w-10 h-10 rounded-full'>
        <motion.svg
            whileHover={{scale : 1.3 }}
            version="1.1"
            id="icons_1_"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 128 128"
            style={{ enableBackground: 'new 0 0 128 128' }}
            xmlSpace="preserve"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 , type: 'spring' }}
          >
            <g id="row2_1_">
              <g id="_x31__4_">
                <path
                  fill="#fafafa"
                  d="M64 .3C28.7.3 0 28.8 0 64s28.7 63.7 64 63.7 64-28.5 64-63.7S99.3.3 64 .3zm0 121C32.2 121.3 6.4 95.7 6.4 64 6.4 32.3 32.2 6.7 64 6.7s57.6 25.7 57.6 57.3c0 31.7-25.8 57.3-57.6 57.3zm1.3-82.8L41.6 64l23.6 25.5h13.5L54.4 64l24.4-25.5H65.3z"
                />
              </g>
            </g>
        </motion.svg>
        </button>
      </motion.div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full blur-sm'>
        <motion.img 
        initial={{scale : 0}}
        animate={{scale : 1}}
        // initial={{scale : 0}}
        src={image.src} className='object-fill' alt="" />
      </div>
      <motion.div className='absolute top-1/2 right-5 -translate-x-1/2 -translate-y-1/2'>
        <button onClick={() => changeImage('next')} className='w-10 h-10 rounded-full'>
          <motion.svg
              whileHover={{scale : 1.3 }}
              version="1.1"
              id="icons_1_"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              viewBox="0 0 128 128"
              style={{ enableBackground: 'new 0 0 128 128' }}
              xmlSpace="preserve"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <g id="row1_1_">
                <g id="_x31__3_">
                  <path
                    fill="#fafafa"
                    d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 121.6C32.2 121.6 6.4 95.8 6.4 64S32.2 6.4 64 6.4s57.6 25.8 57.6 57.6-25.8 57.6-57.6 57.6zM49.2 38.4L73.6 64 49.2 89.6h13.5L86.4 64 62.7 38.4H49.2z"
                  />
                </g>
              </g>
          </motion.svg>
        </button>
      </motion.div>

      <Image src={image.src} info={image.info}/>
    </div>
  )
}

export default App