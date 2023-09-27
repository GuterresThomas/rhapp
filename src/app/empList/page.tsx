import EmployeeList from "@/components/employee/employeeList"
import Sidebar from "@/components/sideBar"
import UserRouteProtection from "@/components/userRouteProtection"


export default function EmployeeListPage() {
    return (
        <UserRouteProtection>
            <div className="flex gap-10">
                <div>
                    <Sidebar />
                </div>
                <div className="justify-center flex">
                    <EmployeeList />
                </div>
            </div>
        </UserRouteProtection>
    )
}