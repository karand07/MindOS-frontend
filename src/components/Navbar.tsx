import Button from "../components/Button"
import Bookmark from "../icon/Bookmark"
import { Share } from "lucide-react"

interface NavbarProps {
  onCreateClick: () => void
  onShareClick: () => void
}

function Navbar({ onCreateClick, onShareClick }: NavbarProps) {
  return (
    <div className="p-2 flex justify-end items-center">
      <Button
        onClick={onCreateClick}
        text="Create Content"
        variant="primary"
        startIcon={<Bookmark />}
      />

      <div className="ml-2">
        <Button
          text="Share Brain"
          startIcon={<Share />}
          variant="secondary"
          onClick={onShareClick}
        />
      </div>
    </div>
  )
}

export default Navbar