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
    <div>
      <div className="">
        <Card className="grid grid-cols-2 primary-bg border-2 border-sky-300 text-sky-200">
          <CardHeader className="grid-col-1">
            <img src="/designcolor.jpg" alt="" className="w-full"/>
          </CardHeader>
          <CardHeader className="">
            <div>
            <h1>Project Name</h1>
            <small>12/9/2024</small>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit culpa odio accusamus cupiditate obcaecati, aliquam, dicta dignissimos labore minima eligendi quaerat autem quo repudiandae ratione eveniet atque eius laboriosam tempora.</p>
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
      </div>
    </div>
  );
};

export default projects;
