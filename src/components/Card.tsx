import Youtube from "../social/Youtube";
import Twitter from "../social/Twitter";
import Bookmark from "../icon/Bookmark";
import Delete from "../icon/Delete";
import Edit from "../icon/Edit";
import { useState } from "react";
import EditContentModal from "./EditContentModal";
import { useOutletContext} from "react-router-dom";
import {type ContentType } from "./EditContentModal";
interface CardProps {
  type: ContentType;
  title:string,
  link:string,
  _id:string
}

interface OutletContextType {
  refreshContent: () => void;
}

function Card(props:CardProps) {
  const [editContent,setEditContent]=useState(false)
  const {refreshContent} = useOutletContext<OutletContextType>()
  return (
  <>  {editContent && (
  <EditContentModal
    id={props._id}
    title={props.title}
    link={props.link}
    type={props.type}
    onClose={() => setEditContent(false)}
    refresh={refreshContent}
  />
)}
<div className="bg-white border shadow-mg max-w-72 max-h-1/3 p-4 overflow-auto">
      {/* header of card */}
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="pr-2"><a href={props.link} target="_blank" rel="noopener noreferrer"><Bookmark/></a></div>
          {props.title} Title 
        </div>
        <div className="flex ml-2">
          <div className="pr-2" onClick={()=>setEditContent(true)}><Edit/></div>
          <div><Delete/></div>
        </div>
      </div>
      {/* main content */}
      <div >
        {props.type ==='YOUTUBE'&& <Youtube link={props.link}/>}
        {props.type ==='TWEET' &&<Twitter link={props.link}/>}
      </div>
    </div>
</>  
  )
}

export default Card