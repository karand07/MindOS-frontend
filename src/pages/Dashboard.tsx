import { useState } from "react"
import Card from "../components/Card"
import { useContent } from "../hooks/useContent"

function Dashboard() {

  const { content, loading } = useContent()
  const [search, setSearch] = useState("")

  if (loading) return <div className="p-6">Loading...</div>

  const filteredContent = content.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.link.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-6">

      <div ><input
        type="text"
        placeholder="Search your brain..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="shadow border border-gray-300   rounded-md px-3 py-2 mb-6 w-full max-w-md"
      /></div>
      

      <div className="flex gap-4 flex-wrap">
        {filteredContent.length === 0 && (
       <p className="text-gray-500">No results found</p>
         )}
        {filteredContent.map((item) => (
          <Card
            key={item._id}
            _id={item._id}
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

export default Dashboard