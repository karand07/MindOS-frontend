import axios from "axios";
import { BACKEND_URL } from "../Config";

interface content{
    title:string,
    url:string,
    type: string
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