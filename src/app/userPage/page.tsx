'use client'
import Link from "next/link"
import Sidebar from "@/components/sideBar"
import UserRouteProtection from "@/components/userRouteProtection"
import AdminRouteProtection from "@/components/adminRouteProtection"

export default function Page() {
  return (
      <AdminRouteProtection>
        <div>
            <div className="flex">
                <Sidebar />
                <div className="opacity-80">
                  <div className="h-screen">
                      <img src="/Background.png" className="h-screen"/>
                  </div>
                </div>
            </div> 
        </div>
        </AdminRouteProtection>
  )
}
