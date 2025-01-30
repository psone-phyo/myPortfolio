import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const navData = [
  {link: "/docs", text: "Home"},
  {link: "/docs", text: "Blog"},
  {link: "/docs", text: "Projects"},
  {link: "/docs", text: "About"},

]
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      {/* <div className="flex justify-start   items-center shadow-md p-2 bg-[#222437]">
      <NavigationMenu className=" mx-[10%]">
        <NavigationMenuList  className="p-3 gap-3">
        {
          navData.map((item, index) => (
            <NavigationMenuItem key={index}>
          <Link href={item.link} legacyBehavior passHref>
            <NavigationMenuLink className=" text-sky-300 border border-sky-400 p-2 px-10 hover:bg-sky-400 hover:text-[#1b1d2c] transition-all">
              {item.text}
            </NavigationMenuLink>
          </Link>
          </NavigationMenuItem>
          ))
        }
        </NavigationMenuList>
      </NavigationMenu>
      </div> */}
      <div className=" mx-[10%]">
      {children}  
      </div>
      </body>
    </html>
  );
}
