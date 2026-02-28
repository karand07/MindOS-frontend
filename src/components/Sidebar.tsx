import { NavLink } from "react-router-dom"
import Docs from "../icon/Docs"
import Photo from "../icon/Photo"
import Social from "../icon/Social"
import Video from "../icon/Video"
import SidebarItems from "./SidebarItems"
import { Brain } from "lucide-react";
function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-72 bg-gray-300 p-3">
     <NavLink to={"/dashboard"} className="flex items-center justify-center gap-2">
  <Brain className="w-7 h-7 text-indigo-600" />
  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
    Mind<span className="text-indigo-600">Os</span>
  </h1>
</NavLink >
      <div className="pt-9">
        
      <SidebarItems text="Youtube" icon={<Video/>} to="youtube"/>
      <SidebarItems text="Tweetter" icon={<Social/>} to="tweeter"/>
      <SidebarItems text="Photos" icon={<Photo/>} to="photos"/>
      <SidebarItems text="Documents" icon={<Docs/>} to="document" />
      </div>
      
    </div>
  )
}

export default Sidebar
