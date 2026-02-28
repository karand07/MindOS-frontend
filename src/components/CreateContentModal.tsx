import { useEffect, useState,type ComponentProps } from "react"
import Cross from "../icon/Cross"
import Button from "./Button"
import Input from "./Input"

interface CreateContentModalProps {
  open: boolean
  onClose: () => void
  onSubmit: (data: { link: string; title: string; type: string; tags: string[] }) => void
  refershContent?: () => void
}

function CreateContentModal({ open, onClose, onSubmit }: CreateContentModalProps) {
  const [link, setLink] = useState("")
  const [title, setTitle] = useState("")
  const [type, setType] = useState("YOUTUBE")
  // Close on ESC press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [onClose])

  const handleSubmit: ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault()
    onSubmit({ link, title ,type ,tags:[]})
    setLink("")
    setTitle("")
    onClose()
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
      onClick={onClose} // click outside to close
    >
      {/* stop propagation so clicking modal won't close */}
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-80 p-6 rounded-xl shadow-xl space-y-4 animate-in fade-in zoom-in"
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Add Content</h2>
          <button type="button" onClick={onClose} className="cursor-pointer">
            <Cross />
          </button>
        </div>

        {/* Inputs */}
        <Input
          placeholder="Enter link"
          onChange={(v) => setLink(v)}
        />

        <Input
          placeholder="Enter Title"
          onChange={(v) => setTitle(v)}
        />
        <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border rounded-md p-2 w-full"
          >
            <option value="YOUTUBE">YouTube</option>
            <option value="TWEET">Tweet</option>
            <option value="BLOG">Blog</option>
            <option value="ARTICLE">Article</option>
            <option value="PHOTO">Photo</option>
          </select>
        {/* Submit */}
        <Button
          text="Submit"
          variant="primary"
          type="submit"
          fullWidth
        />
      </form>
    </div>
  )
}

export default CreateContentModal