import axios from "axios";
import { BACKEND_URL } from "../Config";

export const DeleteContent = async (id: string) => {
  const token = localStorage.getItem("token");

  const res = await axios.delete(
    `${BACKEND_URL}/content/delete/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return res.data;
};  