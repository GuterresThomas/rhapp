import AddClientForm from "@/components/customer/addClientForm"
import Sidebar from "@/components/sideBar"


export default function AddClientFormPage() {
    return (
        <div className="flex gap-10">
            <div>
                <Sidebar />
            </div>
            <div className="justify-center flex">
                <AddClientForm />
            </div>
        </div>
    )
}