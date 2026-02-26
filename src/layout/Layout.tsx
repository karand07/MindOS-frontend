import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="ml-72 min-h-screen p-6 w-full">
        <Outlet />   {/* 👈 child routes render here */}
      </main>
    </div>
  );
}