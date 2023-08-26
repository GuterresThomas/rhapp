import AddSaleForm from "@/components/addSalesForm"
import Sidebar from "@/components/sideBar"


export default function AddFormPage() {
    return (
        <div className="flex gap-10">
            <div>
                <Sidebar />
            </div>
            <div className="justify-center flex">
                <AddSaleForm />
            </div>
        </div>
    )
}