"use client";
import React from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const introtext = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<i>Pyae Sone Phyo</i>",
        "<i>Web Developer</i>",
        "<i>MERN Stack Developer</i>",
      ],
      typeSpeed: 60,
      backSpeed: 30, // Controls the speed of deleting text
      backDelay: 1000, // Delay before deleting text
      startDelay: 300, // Delay before typing starts
      loop: true, // Enables infinite looping
      showCursor: true, // Shows the blinking cursor
      cursorChar: "|", // Custom cursor character
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <motion.div
        ref={ref}
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col justify-center items-start h-full gap-3">
          <p className="lg:text-6xl text-4xl font-bold text-sky-800">Hi, I'm</p>
          <h1 className="lg:text-5xl text-4xl font-bold text-sky-400">
            <span ref={el} />
          </h1>
          {/* <h1 className="lg:text-4xl text-2xl font-bold text-sky-500"><span ref={el} /></h1> */}
          <p className="lg:text-xl text-lg font-bold text-sky-200">
            I specialize in MERN Stack, Laravel, Vue.js, and Next.js, crafting
            dynamic and user-friendly web applications. With a strong foundation
            in full-stack development, I thrive on building innovative solutions
            that enhance user experiences.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default introtext;
