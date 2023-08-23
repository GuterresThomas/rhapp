import Sidebar from "@/components/sideBar"
import BulletinBoard from "@/components/bulletinBoard"

export default function Page() {
    
    return (
        <div className="flex  gap-10">
            <div>
                <Sidebar />
            </div>
            <div className=" w-3/4 justify-center bg-sky-100 m-2 flex">
                <BulletinBoard />
            </div>
        </div>
    )
}