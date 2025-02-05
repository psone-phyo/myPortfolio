import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"


import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { useState } from "react"
const navigation = [
  {title: 'Home', link: '/'},
  {title: 'Projects', link: '/projects'},
  {title: 'Service', link: '/service'},
  {title: 'Blog', link: '/blog'},
  {title: 'Contact', link: '/contact'},
]

export function AppSidebar() {
    return (
    <Sidebar>
      <SidebarContent  className="primary-bg text-sky-200">
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.link}>
                      {/* <item.icon /> */}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    
  )
}
