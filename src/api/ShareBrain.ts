import axios from "axios"
import { BACKEND_URL } from "../Config"

export const ShareBrain = async (share: boolean) => {
  const token = localStorage.getItem("token")

  const res = await axios.post(
    `${BACKEND_URL}/brain/share`,
    { share },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  return res.data
}