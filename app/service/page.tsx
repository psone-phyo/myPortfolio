'use client'
import React from 'react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServicePage = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

    const Services = [
        {title: 'Dynamic Web Application', icon: '/services/dynamicweb.svg'},
        {title: 'API Development', icon: '/services/api.svg'},
        {title: 'Static Website', icon: '/services/staticweb.svg'},
        {title: 'Responsive Web Design', icon: '/services/responsive.svg'},
        {title: 'Reasonable Price', icon: '/services/price.svg'},
        {title: 'Punctuality', icon: '/services/time.svg'},


    ]
  return (
    <div className='min-h-screen mb-10'>
        <h1 className='font-bold text-3xl text-sky-600 text-center mt-10 mb-5'>What I can offer</h1>
        <div className='flex justify-center items-center'>
        <motion.div
        ref={ref}
        initial={{ x: 0, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: 0, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                Services.map((item, index) => (
                    <div className='border border-sky-400 rounded-md p-5 text-sky-300 text-center' key={index}>
                        <div className='flex justify-center mb-2'>
                            <img src={item.icon} alt="javascript" className='w-[70px]' />
                        </div>
                        <h1 className='text-xl mb-1'>{item.title}</h1>
                        <p className='text-sky-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem obcaecati sequi dolorum tenetur cupiditate nulla esse sapiente cum culpa velit autem aperiam voluptates illo, voluptatibus voluptate et vel, sed modi.</p>
                    </div>
                ))
            }
            
        </div>
      </motion.div>
        
    </div>
    </div>
    
  )
}

export default ServicePage