'use client'
import * as React from "react"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"

export default function CarouselDemo() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  
  return (
    <motion.div
        ref={ref}
        initial={{ x: 100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="w-[250px] md:w-8/12"
      >
        <Carousel className="">
      <CarouselContent>
        {Array.from({    length: 5 }).map((_, index) => (
          <CarouselItem className="cursor-pointer" key={index}>
            <Link href='/projects'>
              <Card className="bg-sky-100">
                <CardHeader className="text-sky-200 p-3">
                  <div className="p-2">
                  <img src="/designcolor.jpg" alt="" className="w-full rounded-md"/>
                  <h1 className='text-lg md:text-xl font-bold text-sky-900 text-center md:my-3'>Project 1 Name</h1>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          </CarouselItem>

        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      </motion.div>
    
  )
}
