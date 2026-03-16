import { NavLink } from "react-router-dom"
import Docs from "../icon/Docs"
import Photo from "../icon/Photo"
import Social from "../icon/Social"
import Video from "../icon/Video"
import SidebarItems from "./SidebarItems"
import { Brain } from "lucide-react";
import LogOut from "./LogOut"

import { Menu } from "lucide-react"

interface Props {
  collapsed: boolean
  setCollapsed: (value: boolean) => void
}

function Sidebar({ collapsed, setCollapsed }: Props) {

  return (
    <div className={`fixed left-0 top-0 h-screen bg-gray-300 p-3 flex flex-col justify-between transition-all duration-300 ${
  collapsed ? "w-20" : "w-72"
}`}>
      <div className="mt-5">
        <button
  onClick={() => setCollapsed(!collapsed)}
  className="mb-4 flex justify-center"
>
  <Menu className="w-6 h-6" />
</button>
        {/* Logo */}
    {!collapsed && ( <NavLink to={"/dashboard"} className="flex items-center justify-center gap-2">
        <Brain className="w-7 h-7 text-indigo-600" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Mind<span className="text-indigo-600">Os</span>
        </h1>
      </NavLink >)}
      {/* Sidebar items */}
      <div className="pt-4">   
      <SidebarItems collapsed={collapsed} text="Youtube" icon={<Video/>} to="youtube"/>
      <SidebarItems collapsed={collapsed} text="Tweetter" icon={<Social/>} to="tweeter"/>
      <SidebarItems collapsed={collapsed} text="Photos" icon={<Photo/>} to="photos"/>
      <SidebarItems collapsed={collapsed} text="Documents" icon={<Docs/>} to="document" />
      </div>

      </div>
      <div className="mb-9">
        <LogOut/> 
      </div>
    </div>
  )
}

export default Sidebar
