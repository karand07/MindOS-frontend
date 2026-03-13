import { useEffect, useState } from "react"
import { GetContentData } from "../api/ContentData"
import type { ContentType } from "../components/EditContentModal"
import { useOutletContext } from "react-router-dom"

export interface ContentItem {
  _id: string
  title: string
  type: ContentType
  link: string
}

interface OutletContextType {
  refreshTrigger: number
}

export const useContent = (type?: ContentItem["type"]) => {
  const [content, setContent] = useState<ContentItem[]>([])
  const [loading, setLoading] = useState(true)
  const { refreshTrigger } = useOutletContext<OutletContextType>()
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await GetContentData()

        const cleanedData: ContentItem[] = res.contents.map((item: any) => ({
          _id: item._id,
          title: item.title,
          link: item.link,
          type: item.type
        }))

        // ⭐ If type provided → filter
        const filtered = type
          ? cleanedData.filter((item) => item.type === type)
          : cleanedData

        setContent(filtered)
      } catch (err) {
        console.error("Error fetching content", err)
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [type,refreshTrigger])

  return { content, loading }
}