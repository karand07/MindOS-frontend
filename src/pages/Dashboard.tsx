import { useEffect, useState } from "react"
import Card from "../components/Card"
import { GetContentData } from "../api/ContentData"
import { useOutletContext } from "react-router-dom"

interface OutletContextType {
  refreshTrigger: number
}



interface ContentItem {
  _id: string
  title: string
  type: "youtube" | "twitter"
  link: string
  tags: string[]
}

function Dashboard() {
  const [content, setContent] = useState<ContentItem[]>([])
const refreshTrigger = useOutletContext<OutletContextType>().refreshTrigger
  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await GetContentData()
      console.log("Fetched content data:", res)

      const cleanedData = res.contents.map((item: any) => ({
        _id: item._id,
        title: item.title,
        link: item.link,
        type: item.type.toLowerCase()  // ⭐ convert YOUTUBE → youtube
      }))

      setContent(cleanedData)

    } catch (err) {
      console.error("Error fetching content", err)
    }
  }

  fetchData()
}, [refreshTrigger])

  return (
    <div className="p-6 flex gap-4 flex-wrap">
      {content.map((item) => (
        <Card
          key={item._id}
          title={item.title}
          type={item.type}
          link={item.link}
        />
      ))}
    </div>
  )
}

export default Dashboard