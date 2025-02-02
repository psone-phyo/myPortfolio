'use client'
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type ServiceCardProps = {
    item: {
        icon: string;
        title: string;
    };
}
const servicecard = ({item}:ServiceCardProps) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ x: 0, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: 0, opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div
        className="border border-sky-400 rounded-md p-5 text-sky-300 text-center"
      >
        <div className="flex justify-center mb-2">
          <img src={item.icon} alt="javascript" className="w-[70px]" />
        </div>
        <h1 className="text-xl mb-1">{item.title}</h1>
        <p className="text-sky-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem obcaecati sequi dolorum tenetur cupiditate nulla esse
          sapiente cum culpa velit autem aperiam voluptates illo, voluptatibus
          voluptate et vel, sed modi.
        </p>
      </div>
    </motion.div>
  );
};

export default servicecard;
