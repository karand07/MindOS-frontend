import Card from "../components/Card"
import { useContent } from "../hooks/useContent"

function YoutubePage() {
  const { content, loading } = useContent("YOUTUBE")

  if (loading) return <div className="p-6">Loading...</div>

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">YouTube Content</h1>

      <div className="flex gap-4 flex-wrap">
        {content.map((item) => (
          <Card
              _id={item._id}
            key={item._id}
            title={item.title}
            type={item.type}
            link={item.link}
            tags={item.tags}
          />
        ))}
      </div>
    </div>
  )
}

export default YoutubePage