import type { ReactElement } from "react"

interface SidebarItems{
    text:string ,
    icon: ReactElement
}

function SidebarItems(props:SidebarItems) {
  return (
    <>
    <div className="flex p-3 my-1 bg-white items-center  rounded-md shadow-lg border-sm">
        <div className="px-2">{props.icon}</div>
        <div className="font-md">{props.text}</div>
    </div>
    </>
  )
}

export default SidebarItems