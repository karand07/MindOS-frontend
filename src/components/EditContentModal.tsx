import { useState , type ComponentProps} from "react"
import { UpdateContent } from "../api/UpdateContent"
export type ContentType =
  | "TWEET"
  | "BLOG"
  | "ARTICLE"
  | "PHOTO"
  | "YOUTUBE"
interface Props {
  id: string
  title: string
  link: string
  type: ContentType
  onClose: () => void
  refresh: () => void
}

function EditContentModal({ id, title, link, type, onClose, refresh }: Props) {

  const [newTitle, setNewTitle] = useState(title)
  const [newLink, setNewLink] = useState(link)
  const [newType, setNewType] = useState<Props['type']>(type)

const handleSubmit: ComponentProps<"form">["onSubmit"] = async (e) => {
    e.preventDefault() // ⭐ prevents page reload

    try {
      await UpdateContent(id, {
        title: newTitle,
        link: newLink,
        type: newType
      })

      refresh()
      onClose()

    } catch (err) {
      console.error("Update failed", err)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">

      <div className="bg-white p-6 rounded w-96">

        <h2 className="text-xl font-bold mb-4">Edit Content</h2>

        <form onSubmit={handleSubmit}>

          <input
            className="border p-2 w-full mb-3"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />

          <input
            className="border p-2 w-full mb-3"
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
          />

          <select
  className="border p-2 w-full mb-4"
  value={newType}
  onChange={(e) => setNewType(e.target.value as Props["type"])}
>
  <option value="YOUTUBE">YOUTUBE</option>
  <option value="TWEET">TWEET</option>
  <option value="BLOG">BLOG</option>
  <option value="ARTICLE">ARTICLE</option>
  <option value="PHOTO">PHOTO</option>
</select>

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-3 py-1 bg-blue-500 text-white rounded cursor-pointer"
            >
              Update
            </button>

          </div>

        </form>

      </div>
    </div>
  )
}

export default EditContentModal