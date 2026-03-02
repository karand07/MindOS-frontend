import Card from "../components/Card"
import { useContent } from "../hooks/useContent"

function Dashboard() {
  const { content, loading } = useContent()

  if (loading) return <div className="p-6">Loading...</div>

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