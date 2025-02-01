import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = () => {
  return (
    <div className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {
          Array.from({ length: 5 }).map((_, index) => (
        <Card className="grid grid-cols-1 primary-bg border-2 border-sky-300 text-sky-200 cursor-pointer hover:scale-105 transition-all" key={index}>
          <div className="px-5 py-5">
            <div className="p-2 bg-sky-200 rounded-md">
            <img src="/designcolor.jpg" alt="" className="w-full"/>
            </div>
          </div>
          <div className="px-5 pb-5">
            <div>
            <h1>Project Name</h1>
            <small>12/9/2024</small>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit culpa odio accusamus cupiditate obcaecati, aliquam, dicta dignissimos labore minima eligendi quaerat autem quo repudiandae ratione eveniet atque eius laboriosam tempora.</p>
            </div>
            
            <div className="flex justify-start items-center gap-2 mt-3">
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
          </div>
        </Card>
          ))
        }
        
      </div>
    </div>
  );
};

export default projects;
