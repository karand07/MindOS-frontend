import { useContent } from "../hooks/useContent"
import Card from "../components/Card" 

function DocPage() {
  const { content, loading } = useContent("blog")

  if (loading) return <div className="p-6">Loading...</div>

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blog Content</h1>

      <div className="flex gap-4 flex-wrap">
        {content.map((item) => (
          <Card
            key={item._id}
            title={item.title}
            type={item.type}
            link={item.link}
          />
        ))}
      </div>
    </div>)
}
export default DocPage