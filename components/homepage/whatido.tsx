'use client'

import { ChevronsLeftRightEllipsis, CodeXml, Database } from 'lucide-react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WhatIDoCard from '@/components/homepage/components/whatidocard'

const whatido = () => {
    const whatIDo = [
        {
          title: "Full Stack Web Development",
          description:
            "I specialize in full-stack web development, creating dynamic and responsive web applications. From building user-friendly frontends to developing robust backends, I ensure seamless integration across all layers to deliver smooth and efficient web experiences.",
            icon: <CodeXml size={50} className='text-sky-300'/>
        },
        {
          title: "API Development",
          description:
            "I specialize in building robust and scalable APIs using Node.js, focusing on seamless communication between frontend and backend. My APIs are designed with security, performance, and ease of use in mind, ensuring efficient data management and smooth user experiences.",
            icon:<ChevronsLeftRightEllipsis size={50} className='text-sky-300'/>
        },
        {
          title: "Database Management",
          description:
            "I specialize in database management, ensuring efficient data storage, retrieval, and management. From designing database schemas to optimizing queries, I ensure smooth data flow and seamless integration with web applications.",
            icon:<Database size={50} className='text-sky-300'/>
        },
    ]

  return (
    <div className=' mt-10 '>
        <h1 className='font-bold text-4xl text-sky-500 text-center'>What I Do</h1>
        <div className='lg:grid lg:grid-cols-3 gap-5 mt-10 flex flex-col justify-center items-center'>
        {
            whatIDo.map((item, index) => (
              <WhatIDoCard item={item} key={index}/>
            ))
        }
    </div>
    </div>
    
  )
}

export default whatido