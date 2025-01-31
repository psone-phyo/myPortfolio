'use client'
import React from 'react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const myphoto = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div>
      <motion.div
        ref={ref}
        initial={{ x: 100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div>
            <img src='/dummyprofile.png' alt="My Photo" className='w-full lg:h-screen'/>
        </div>
      </motion.div>
        
    </div>
  )
}

export default myphoto