import { useState } from "react"
import { ShareBrain } from "../api/ShareBrain"

interface Props {
  onClose: () => void
}

function ShareBrainModal({ onClose }: Props) {

  const [shareEnabled, setShareEnabled] = useState(false)
  const [link, setLink] = useState("")
  const [loading, setLoading] = useState(false)

  const handleToggle = async () => {

    const newValue = !shareEnabled
    setShareEnabled(newValue)

    if (newValue) {
      try {
        setLoading(true)

        const res = await ShareBrain(true)

        console.log("API response:", res)

        const generatedLink = `https://mindos-chi.vercel.app/share/${res.url}`

        setLink(generatedLink)

      } catch (err) {
        console.error("Share link generation failed", err)
      } finally {
        setLoading(false)
      }

    } else {
      setLink("")
    }
  }

  const copyLink = () => {
    navigator.clipboard.writeText(link)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">

      <div className="bg-white p-6 rounded w-96">

        <h2 className="text-xl font-semibold mb-4">
          Share Your Brain
        </h2>

        {/* Toggle */}

        <div className="flex items-center justify-between mb-4">

          <span>Share Brain Publicly</span>

          <label className="flex items-center cursor-pointer">

            <div className="relative">

              <input
                type="checkbox"
                className="sr-only"
                checked={shareEnabled}
                onChange={handleToggle}
              />

              <div className="block bg-gray-300 w-10 h-6 rounded-full"></div>

              <div
                className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition ${
                  shareEnabled ? "translate-x-4 bg-green-500" : ""
                }`}
              />

            </div>

          </label>

        </div>

        {/* Loading */}

        {shareEnabled && loading && (
          <p className="text-sm text-gray-500 mb-3">
            Generating share link...
          </p>
        )}

        {/* Share link */}

        {shareEnabled && link && (
          <div className="border rounded p-2 flex justify-between items-center">

            <span className="text-sm truncate">
              {link}
            </span>

            <button
              onClick={copyLink}
              className="text-blue-500 hover:underline"
            >
              Copy
            </button>

          </div>
        )}

        {/* Close */}

        <div className="mt-4 flex justify-end">

          <button
            onClick={onClose}
            className="px-3 py-1 bg-gray-300 rounded"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  )
}

export default ShareBrainModal