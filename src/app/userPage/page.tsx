'use client'
import React, { useEffect } from "react";
import Link from "next/link"
import Sidebar from "@/components/sideBar"
import UserRouteProtection from "@/components/userRouteProtection"



export default function Page() {
  
  return (
      <UserRouteProtection>
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
      </UserRouteProtection>
  )
}
