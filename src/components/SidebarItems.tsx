import type { ReactElement } from "react"
import { NavLink } from "react-router-dom"

interface SidebarItems{
    text:string ,
    icon: ReactElement
    to:string
}

function SidebarItems(props:SidebarItems) {
  return (
    <>
    <NavLink  to={props.to} className="flex p-3 my-1 bg-white items-center  rounded-md shadow-lg border-sm">
        <div className="px-2">{props.icon}</div>
        <div className="font-md">{props.text}</div>
    </NavLink>
    </>
  )
}

export default SidebarItems