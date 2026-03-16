import Youtube from "../social/Youtube";
import Twitter from "../social/Twitter";
import Bookmark from "../icon/Bookmark";
import Delete from "../icon/Delete";
import Edit from "../icon/Edit";
import { useState } from "react";
import EditContentModal from "./EditContentModal";
import { useOutletContext} from "react-router-dom";
import {type ContentType } from "./EditContentModal";
import { DeleteContent } from "../api/DeleteContent";
import Article from "../social/Article";
import Photo from "../social/Photo";

interface CardProps {
  type: ContentType;
  title:string,
  link:string,
  _id:string,
  readonly?: boolean
  tags?:string[]
}

interface OutletContextType {
  refreshContent?: () => void;
}

function Card(props:CardProps) {
  const handleDelete = async()=>{
    try {
      await DeleteContent(props._id)
      refreshContent?.()
    } catch (error) {
      console.error("Delete failed", error)
    }
  }

  const [editContent,setEditContent]=useState(false)
  const outlet = useOutletContext<OutletContextType | null>()
const refreshContent = outlet?.refreshContent
  return (
  <>  {editContent && (
  <EditContentModal
    id={props._id}
    title={props.title}
    link={props.link}
    type={props.type}
    onClose={() => setEditContent(false)}
    refresh={refreshContent?? (() => {})}
  />
)}
<div className="bg-white  shadow-xl max-w-72 max-h-1/3 p-4 overflow-auto rounded-md">
      {/* header of card */}
      <div className="flex justify-between pb-2">
        <div className="flex items-center">
          <div className="pr-2"><a href={props.link} target="_blank" rel="noopener noreferrer"><Bookmark/></a></div>
          {props.title} 
        </div>
        {!props.readonly && (<div className="flex ml-2">
          <div className="pr-2 cursor-pointer" onClick={()=>setEditContent(true)}><Edit/></div>
          <div className="cursor-pointer" onClick={handleDelete}><Delete/></div>
        </div>)}
      </div>
      
      {/* main content */}
      <div >
        {props.type ==='YOUTUBE'&& <Youtube link={props.link}/>}
        {props.type ==='TWEET' &&<Twitter link={props.link}/>}
        {(props.type ==='ARTICLE'|| props.type ==='BLOG') && <Article link={props.link}/>}   
        {props.type ==='PHOTO' && <Photo link={props.link}/>} 
      </div>

      {props.tags && props.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {props.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-200 px-2 py-1 rounded-md"
                >
                  #{tag}
                </span>
              ))}
            </div>
         )}
    </div>
</>  
  )
}

export default Card