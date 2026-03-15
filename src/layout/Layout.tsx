import { useState } from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import CreateContentModal from "../components/CreateContentModal"
import ShareBrainModal from "../components/ShareBrainModal"
import { Outlet } from "react-router-dom"
import { CreateContent } from "../api/CreateContent"

export default function RootLayout() {

  const [modalOpen, setModalOpen] = useState(false)
  const [refreshTrigger, setRefreshTrigger] = useState(0)
  const [openShare, setOpenShare] = useState(false)

  const refreshContent = () => {
    setRefreshTrigger(prev => prev + 1)
  }

  return (
    <div className="flex">

      <Sidebar />

      <main className="ml-72 min-h-screen pt-1 px-4 w-full">

        <Navbar
          onCreateClick={() => setModalOpen(true)}
          onShareClick={() => setOpenShare(true)}
        />

        <div className="p-4">
          <Outlet context={{ refreshContent, refreshTrigger }} />
        </div>

        <CreateContentModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={async (data) => {
            try {
              await CreateContent({ ...data, url: data.link })
              refreshContent()
              setModalOpen(false)
            } catch (error) {
              alert(error)
            }
          }}
        />

        {openShare && (
          <ShareBrainModal
            onClose={() => setOpenShare(false)}
          />
        )}

      </main>

    </div>
  )
}