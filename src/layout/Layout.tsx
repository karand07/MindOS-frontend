import { useState } from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import CreateContentModal from "../components/CreateContentModal"
import {  Outlet } from "react-router-dom"
import { CreateContent } from "../api/CreateContent"

export default function RootLayout() {
  const [modalOpen, setModalOpen] = useState(false)
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  const refreshContent = () => {
    setRefreshTrigger(prev => prev + 1)
  }
  return (
    <div className="flex">
      <Sidebar />

      <main className="ml-72 min-h-screen pt-1 px-4 w-full">
        {/* pass click handler to navbar */}
        <Navbar onCreateClick={() => setModalOpen(true)} />

        <div className="p-4">
          <Outlet context={{ refreshContent ,refreshTrigger}}  />
        </div>

        {/* ⭐ GLOBAL MODAL lives here */}
        <CreateContentModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={async(data) => {
            try {
              await CreateContent({ ...data, url: data.link })
              refreshContent()
              setModalOpen(false)
            } catch (error) {
              alert(error)
            }
          }}
        />
      </main>
    </div>
  )
}

