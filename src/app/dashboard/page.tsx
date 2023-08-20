import AverageAgeCalc from "@/components/dataComponents/averageAge"
import AverageSalaryCalc from "@/components/dataComponents/averageSalary"
import GenderDistTrue from "@/components/dataComponents/genderDistTrue"
import Sidebar from "@/components/sideBar"
import MainDashBoard from "@/components/maindashboard"

export default function Page() {
    
    return (
        <div className="flex justify-center gap-10">
            <div>
                <Sidebar />
            </div>
            <div className="justify-center flex">
                <MainDashBoard />
            </div>
        </div>
    )
}