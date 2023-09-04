import Sidebar from "@/components/sideBar"
import CashRegister from "@/components/cashregister/cashRegister"


export default function CustomerListPage() {
    return (
        <div className="flex gap-10">
            <div>
                <Sidebar />
            </div>
            <div className="justify-center flex">
                <CashRegister/>
            </div>
        </div>
    )
}