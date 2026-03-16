import { useState } from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import CreateContentModal from "../components/CreateContentModal"
import ShareBrainModal from "../components/ShareBrainModal"
import { Outlet } from "react-router-dom"
import type { ContentType } from "../components/EditContentModal"
import { CreateContent} from "../api/CreateContent"

export default function RootLayout() {

  const [modalOpen, setModalOpen] = useState(false)
  const [refreshTrigger, setRefreshTrigger] = useState(0)
  const [openShare, setOpenShare] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

  const refreshContent = () => {
    setRefreshTrigger(prev => prev + 1)
  }

  return (
    <div className="flex">

      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <main
        className={`min-h-screen pt-1 px-4 w-full transition-all duration-300 ${
          collapsed ? "ml-20" : "ml-72"
        }`}
      >

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
                await CreateContent({ ...data, url: data.link, type: data.type as ContentType })
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