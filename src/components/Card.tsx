import Share from "../icon/Share";
import Youtube from "../social/Youtube";
import Twitter from "../social/Twitter";
import Bookmark from "../icon/Bookmark";
import Delete from "../icon/Delete";

interface CardProps {
  type:"youtube"|"twitter",
  title:string,
  link:string
}

function Card(props:CardProps) {
  return (
    <div className="bg-white border shadow-mg max-w-72 max-h-1/3 p-4 overflow-auto">
      {/* header of card */}
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="pr-2"><Bookmark/></div>
          {props.title} Title 
        </div>
        <div className="flex">
          <div className="pr-2" > <a href={props.link} target="_blank" rel="noopener noreferrer"><Share/></a></div>
          <div><Delete/></div>
        </div>
      </div>
      {/* main content */}
      <div >
        {props.type ==='youtube'&& <Youtube link={props.link}/>}
        {props.type ==='twitter' &&<Twitter link={props.link}/>}
      </div>
    </div>
  )
}

export default Card