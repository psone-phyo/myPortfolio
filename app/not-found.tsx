'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import Lottie from "lottie-react";
import astronautAnimation from "../public/404.json"; // Use local file

export default function Custom404() {
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
        Oops! The page you're looking for doesn't exist.
      </motion.p>

      {/* Lottie Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: .5, duration: 0.5 }}
        className="mt-6"
      >
        <div className="w-72 h-72 mt-6">
        <Lottie animationData={astronautAnimation} loop={true} />
      </div>
      </motion.div>
      

      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: .5, duration: 0.5 }}
        className="mt-6"
      >
        <Link href="/">
          <span className="px-6 py-3 text-lg font-medium bg-sky-600 rounded-lg hover:bg-sky-700 transition-all cursor-pointer">
            Back to Home
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
