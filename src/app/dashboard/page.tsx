import AverageAgeCalc from "@/components/dataComponents/averageAge"
import AverageSalaryCalc from "@/components/dataComponents/averageSalary"
import GenderDistTrue from "@/components/dataComponents/genderDistTrue"
import Sidebar from "@/components/sideBar"
import MainDashBoard from "@/components/maindashboard"

export default function Page() {
    
    return (
        <div className="flex gap-10">
            <div>
                <Sidebar />
            </div>
            <div className="justify-center flex-col flex">
                <MainDashBoard />
            </div>
        </div>
    )
}