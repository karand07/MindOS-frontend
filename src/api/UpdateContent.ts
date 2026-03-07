import axios from "axios"
import { BACKEND_URL } from "../Config"

interface UpdateContentData {
  title: string
  link: string
  type:  "TWEET"|"BLOG"|"ARTICLE"|"PHOTO"|"YOUTUBE"
}

export const UpdateContent = async (id: string, data: UpdateContentData) => {
  const token = localStorage.getItem("token")

  const res = await axios.put(
    `${BACKEND_URL}/content/update/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  return res.data
}