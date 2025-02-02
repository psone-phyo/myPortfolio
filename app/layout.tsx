import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navigation from '@/components/layout/navigation'
import NavigationMobile from '@/components/layout/navigationMobile'
import Footer from '@/components/layout/footer'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

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
        <div className="hidden xl:block">
        <Navigation/>
        <div className="mx-[10%]">
        {children}  
      </div>
        </div>

        <div className="block xl:hidden">
        <SidebarProvider>
            <AppSidebar />
            <main>
              <div className="flex justify-start items-center w-screen shadow-md p-2 bg-[#222437]">
              <SidebarTrigger />
              </div>
              <div className="mx-5">
              {children}  
              </div>
            </main>
        </SidebarProvider>
        </div>
      
      
      <Footer/>
      </body>
    </html>
  );
}
