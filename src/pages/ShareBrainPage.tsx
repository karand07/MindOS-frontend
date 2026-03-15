import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../Config"
import Card from "../components/Card"
import type { ContentType } from "../components/EditContentModal"

interface ContentItem {
  _id: string
  title: string
  link: string
  type: ContentType
}

function ShareBrainPage() {

  const { hash } = useParams()

  const [content,setContent] = useState<ContentItem[]>([])
  const [username,setUsername] = useState("")

  useEffect(() => {

    const fetchSharedBrain = async () => {

      try {

        const res = await axios.get(`${BACKEND_URL}/brain/${hash}`)

        console.log(res.data)

        setUsername(res.data.username.username)

        const cleanedData = res.data.content.map((item:any)=>({
          _id:item._id,
          title:item.title,
          link:item.link,
          type:item.type
        }))

        setContent(cleanedData)

      } catch(err){
        console.error("Failed to load shared brain",err)
      }
    }

    fetchSharedBrain()

  },[hash])

  return (
    <div className="min-h-screen p-8 bg-gray-100">

      <h1 className="text-3xl font-bold mb-6">
        {username}'s Brain
      </h1>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">

        {content.map((item)=>(
          <div key={item._id} className="break-inside-avoid mb-4">

            <Card
              _id={item._id}
              title={item.title}
              link={item.link}
              type={item.type}
              readonly
            />

          </div>
        ))}

      </div>

    </div>
  )
}

export default ShareBrainPage