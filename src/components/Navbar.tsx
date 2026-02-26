import { useState } from "react"
import Button from "../components/Button"
import CreateContentModal from "../components/CreateContentModal"
import Bookmark from "../icon/Bookmark"
import { Share } from "lucide-react"

function Navbar() {
     const [modalOpen ,setModalOpen]=useState(false)
  return (
    <div className="p-2 flex justify-end items-center">
    <Button onClick={()=>setModalOpen(true)} text="create content" variant="primary" startIcon={<Bookmark/>} />
    <CreateContentModal open={modalOpen} onClose={()=>setModalOpen(false)} />
        <div className="ml-2"><Button text="Share Brain" startIcon={<Share/>} variant="secondary"  /></div>
        
    </div>
  )
}

export default Navbar