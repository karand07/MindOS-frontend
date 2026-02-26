import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="ml-72 min-h-screen pt-1 px-4 w-full">
        <Navbar/>
        <div className="p-4">
           <Outlet />   {/* 👈 child routes render here */}
        </div>
       
      </main>
    </div>
  );
}