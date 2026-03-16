import Card from "../components/Card"
import { useContent } from "../hooks/useContent"
function PhotoPage() {
  const { content, loading } = useContent("PHOTO")

  if (loading) return <div className="p-6">Loading...</div>

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Photo Content</h1>

      <div className="flex gap-4 flex-wrap">
        {content.map((item) => (
          <Card
            key={item._id}
            title={item.title}
            type={item.type }
            link={item.link}
            _id={item._id}
            tags={item.tags}
          />
        ))}
      </div>
    </div>
  )
}

export default PhotoPage