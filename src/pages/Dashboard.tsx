import { useState } from "react"
import Button from "../components/Button"
import CreateContentModal from "../components/CreateContentModal"
import Bookmark from "../icon/Bookmark"

import RootLayout from "../layout/Layout"


function Dashboard() {
    const [modalOpen ,setModalOpen]=useState(false)
  return (
    <>
    <RootLayout><div ><Button onClick={()=>setModalOpen(true)} text="create content" variant="primary" startIcon={<Bookmark/>} />
    <CreateContentModal open={modalOpen} onClose={()=>setModalOpen(false)} /></div></RootLayout>
    
    
    </>
  )
}

export default Dashboard