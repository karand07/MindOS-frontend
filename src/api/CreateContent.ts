import axios from "axios";
import { BACKEND_URL } from "../Config";
import { type ContentType } from "../components/EditContentModal";
interface content{
    title:string,
    url:string,
    type: ContentType, // "TWEET"|"BLOG"|"ARTICLE"|"PHOTO"|"YOUTUBE"
    tags: string[]
}

export const CreateContent = async (data:content) => {
    const token = localStorage.getItem("token")
    const res = await axios.post(`${BACKEND_URL}/content/post`,
           {
             title: data.title,
             link:  data.url,
             type: data.type,
             tags:data.tags
           },{
           headers:{
            Authorization: `Bearer ${token}`,
           }},
    )

    return res.data
} 