import Sidebar from "../components/Sidebar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Sidebar />

        {/* Main content shifted to the right */}
        <main className="ml-72 min-h-screen p-6">
          {children}
        </main>
      </body>
    </html>
  )
}
