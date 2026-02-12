import Docs from "../icon/Docs"
import Photo from "../icon/Photo"
import Social from "../icon/Social"
import Video from "../icon/Video"
import SidebarItems from "./SidebarItems"

function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-72 bg-gray-300">
      <div className="mt-9">
      <SidebarItems text="Youtube" icon={<Video/>}/>
      <SidebarItems text="Tweetter" icon={<Social/>}/>
      <SidebarItems text="Photos" icon={<Photo/>}/>
      <SidebarItems text="Documents" icon={<Docs/>}/>
      </div>
      
    </div>
  )
}

export default Sidebar
