import Sidebar from "@/components/sideBar"
import MainDashBoard from "@/components/maindashboard"
import UserRouteProtection from "@/components/userRouteProtection"

export default function Page() {
    
    return (
        <UserRouteProtection>
            <div className="flex justify-center gap-10">
                <div>
                    <Sidebar />
                </div>
                <div className="justify-center bg-sky-100 m-2 flex">
                    <MainDashBoard />
                </div>
            </div>
        </UserRouteProtection>
    )
}