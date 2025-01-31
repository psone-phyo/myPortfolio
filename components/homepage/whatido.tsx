'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { ChevronsLeftRightEllipsis, CodeXml, Database } from 'lucide-react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


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
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className=' mt-10 '>
        <h1 className='font-bold text-4xl text-sky-500 text-center'>What I Do</h1>
        <div className='lg:grid lg:grid-cols-3 gap-5 mt-10 flex flex-col justify-center items-center'>
        {
            whatIDo.map((item, index) => (
              <motion.div
              ref={ref}
              initial={{ y: -100, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
              transition={{ duration: 1 }}
              key={index}
              
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
            
            ))
        }
    </div>
    </div>
    
  )
}

export default whatido