import Sidebar from "@/components/sideBar"
import SalesList from "@/components/cashregister/salesList"


export default function CustomerListPage() {
    return (
        <div className="flex gap-10">
            <div>
                <Sidebar />
            </div>
            <div className="justify-center flex">
                <SalesList/>
            </div>
        </div>
    )
}