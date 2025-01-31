'use client'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Page() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div className="space-y-20 p-10">
        <div className="h-screen">
            hi
        </div>
      <motion.div
        ref={ref}
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="p-6 bg-blue-500 text-white rounded-lg shadow-lg"
      >
        Left Appearing Box
      </motion.div>
    
    </div>
  );
}
