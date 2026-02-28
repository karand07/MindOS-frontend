import axios from "axios";
import { BACKEND_URL } from "../Config";    

export const GetContentData = async () => {
    const token = localStorage.getItem("token")
    const res = await axios.get(`${BACKEND_URL}/content/get`,
           {
           headers:{
            Authorization: `Bearer ${token}`,
           }},
    )

    return res.data
}

