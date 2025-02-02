import React from 'react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

type WhatIDoCardProps = {
    item: {
        icon: React.ReactNode,
        title: string,
        description: string
    }
}
const whatidocard = ({item}: WhatIDoCardProps) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <motion.div
              ref={ref}
              initial={{ y: -100, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
              transition={{ duration: 1 }}
              
              
            >
              <Card className='grid-col-1 border-2 border-sky-800 bg-trasparent'>
            <CardHeader >
            <div className='flex flex-col justify-center items-center gap-2'>
                {item.icon}
                <CardTitle className='text-sky-300 font-bold'>{item.title}</CardTitle>
                
            </div>
            </CardHeader>
            <CardContent className='text-blue-200'>
                <div>
                {item.description}
                </div>
            </CardContent>
        </Card>
            </motion.div>
  )
}

export default whatidocard