import type { ReactElement } from "react"
import { NavLink } from "react-router-dom"

interface SidebarItems{
    text:string ,
    icon: ReactElement
    to:string
    collapsed?:boolean
}

function SidebarItems(props:SidebarItems) {
  return (
    <>
    <NavLink  to={props.to} className="flex p-3 my-2 bg-white items-center  rounded-md shadow-lg border-sm">
        <div className="px-2">{props.icon}</div>
        {(!props.collapsed && 
        <div className="font-md">{props.text}</div>)}
    </NavLink>
    </>
  )
}

export default SidebarItems