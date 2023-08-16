import EmployeeList from "@/components/employeeList"
import Sidebar from "@/components/sideBar"

export default function EmployeeListPage() {
    return (
        <div className="flex gap-10">
            <div>
                <Sidebar />
            </div>
            <div className="justify-center flex">
                <EmployeeList />
            </div>
        </div>
    )
}