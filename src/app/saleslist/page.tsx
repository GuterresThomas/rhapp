import Sidebar from "@/components/sideBar"
import SalesList from "@/components/cashregister/salesList"
import UserRouteProtection from "@/components/userRouteProtection"

export default function CustomerListPage() {
    return (
        <UserRouteProtection>
            <div className="flex gap-10">
                <div>
                    <Sidebar />
                </div>
                <div className="justify-center flex">
                    <SalesList/>
                </div>
            </div>
        </UserRouteProtection>
    )
}