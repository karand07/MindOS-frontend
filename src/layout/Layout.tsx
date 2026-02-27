import { useState } from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import CreateContentModal from "../components/CreateContentModal"
import {  Outlet } from "react-router-dom"
import { CreateContent } from "../api/CreateContent"

export default function RootLayout() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className="flex">
      <Sidebar />

      <main className="ml-72 min-h-screen pt-1 px-4 w-full">
        {/* pass click handler to navbar */}
        <Navbar onCreateClick={() => setModalOpen(true)} />

        <div className="p-4">
          <Outlet />
        </div>

        {/* ⭐ GLOBAL MODAL lives here */}
        <CreateContentModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={async(data) => {
            try {
              await CreateContent({ ...data, url: data.link })
              alert("content added")
            } catch (error) {
              alert(error)
            }
          }}
        />
      </main>
    </div>
  )
}