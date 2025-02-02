'use client'
import React from 'react'
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type TechSkillProps = {
    item: {
        logo: string,
        title: string,
        value: number
    }
}
const techskill = ({item}:TechSkillProps) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <motion.div
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x:-100, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="grid-col-1 mx-[10%]">
              <div className="text-xl text-sky-400 flex items-center justify-start gap-2 mb-2">
                <img src={item.logo} alt="" className="w-[30px]" />
                <span>{item.title}</span>
              </div>
              <Progress value={item.value} indicatorColor="bg-sky-500" />
            </div>
          </motion.div>
  )
}

export default techskill