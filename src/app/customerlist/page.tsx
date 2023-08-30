import CustomerList from "@/components/customer/customerList"
import Sidebar from "@/components/sideBar"

export default function CustomerListPage() {
    return (
        <div className="flex gap-10">
            <div>
                <Sidebar />
            </div>
            <div className="justify-center flex">
                <CustomerList />
            </div>
        </div>
    )
}