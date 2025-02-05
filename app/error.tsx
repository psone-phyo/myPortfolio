'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import Lottie from "lottie-react";
import ServerError from "../public/error.json"; // Use local file

export default function ErroPage() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-white text-center px-6">
      {/* Floating 404 Text */}

      {/* Subtext */}
      <motion.p
        className="text-lg mt-10 text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        <h1 className="font-bold text-6xl  text-sky-500">500</h1>
        <h1 className="text-3xl font-bold text-sky-500">Internal Server Error</h1>
      </motion.p>

      {/* Lottie Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: .5, duration: 0.5 }}
        className="mt-3"
      >
        <div className="w-72 h-72 mt-6 bg-sky-800 rounded-md">
        <Lottie animationData={ServerError} loop={true} />
      </div>
      </motion.div>
      

      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: .5, duration: 0.5 }}
        className="mt-6"
      >
      </motion.div>
    </div>
  );
}
