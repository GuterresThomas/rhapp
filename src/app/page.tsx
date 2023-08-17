import Image from 'next/image'
import Link from "next/link"
import Sidebar from "@/components/sideBar"

export default function Home() {
  return (
      <div className="flex">
        <Sidebar />
        <div className="opacity-80">
          <div className="h-screen">
            <img src="/Background.png" className="h-screen"/>
          </div>
        </div>
      </div>
  
  )
}
