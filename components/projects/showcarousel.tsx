'use client'
import * as React from "react"

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
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {/* {Array.from({ length: 5 }).map((_, index) => ( */}
          <CarouselItem className="cursor-pointer">
            <Link href='/projects'>
              <Card className="grid grid-cols-2 primary-bg border-2 border-sky-300 text-sky-200 ">
                        <CardHeader className="grid-col-1 p-3">
                          <img src="/designcolor.jpg" alt="" className="w-full"/>
                        </CardHeader>
                        <CardHeader className=" p-5">
                          <div>
                          <h1>Project Name</h1>
                          <small>12/9/2024</small>
                          <p className="hidden xl:block">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo libero minima ullam quia, eos distinctio ipsa at ex sunt officia repudiandae corporis explicabo similique aut ratione. Tempore officiis consectetur enim!</p>
                          </div>
                          
                          <div className="flex justify-start items-center gap-2">
                              <small className="bg-sky-700 rounded-md p-1 text-sky-100">
                                  Reactjs
                              </small>
                              <small className="bg-sky-700 rounded-md p-1 text-sky-100">
                                  Laravel
                              </small>
                              <small className="bg-sky-700 rounded-md p-1 text-sky-100">
                                  Nodejs
                              </small>
                          </div>
                        </CardHeader>
            </Card>
            </Link>
          </CarouselItem>

        {/* ))} */}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
