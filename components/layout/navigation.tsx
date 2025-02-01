'use client '
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from "next/link";

const navigation = () => {
    const navigation = [
        {title: 'Home', link: '/'},
        {title: 'Projects', link: '/projects'},
        {title: 'Service', link: '/service'},
        {title: 'Blog', link: '/blog'},
        {title: 'Contact', link: '/contact'},
    ]

    
  return (
     <div className="flex justify-start   items-center shadow-md p-2 bg-[#222437]">
      <NavigationMenu className=" mx-[10%]">
        <NavigationMenuList  className="p-3 gap-3">
        {
          navigation.map((item, index) => (
            <NavigationMenuItem key={index}>
          <Link href={item.link} legacyBehavior passHref>
            <NavigationMenuLink className=" text-sky-300 border border-sky-400 p-2 px-10 hover:bg-sky-400 hover:text-[#1b1d2c] transition-all">
              {item.title}
            </NavigationMenuLink>
          </Link>
          </NavigationMenuItem>
          ))
        }
        </NavigationMenuList>
      </NavigationMenu>
      </div>
  )
}

export default navigation