import EditForm from "@/components/editForm"
import Sidebar from "@/components/sideBar"

export default function EditFormPage() {
    return (
        <div className="flex gap-10">
            <div>
                <Sidebar />
            </div>
            <div className="justify-center flex">
                <EditForm />
            </div>
        </div>
    )
}