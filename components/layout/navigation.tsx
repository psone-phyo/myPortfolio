"use client";
import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";

const Navigation = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const currentScrollY = scrollY.get();
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true); // Hide navbar when scrolling down
      } else {
        setHidden(false); // Show navbar when scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    const unsubscribe = scrollY.on("change", updateScroll);
    return () => unsubscribe(); // Cleanup function
  }, [scrollY, lastScrollY]);

  const navigationLinks = [
    { title: "Home", link: "/" },
    { title: "Projects", link: "/projects" },
    { title: "Service", link: "/service" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-100%" : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`w-full flex justify-between items-center shadow-md p-2 bg-[#222437] z-50 fixed top-0 left-0`}
    >
      <h1 className="ms-[10%] text-sky-400 font-bold text-3xl">
        Pyae Sone Phyo
      </h1>
      <NavigationMenu className="mx-[10%]">
        <NavigationMenuList className="p-3 gap-3 flex">
          {navigationLinks.map((item, index) => (
            <NavigationMenuItem key={index}>
              <Link href={item.link} legacyBehavior passHref>
                <NavigationMenuLink className="text-sky-300 border border-sky-400 p-2 px-10 hover:bg-sky-400 hover:text-[#1b1d2c] transition-all">
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </motion.nav>
  );
};

export default Navigation;
