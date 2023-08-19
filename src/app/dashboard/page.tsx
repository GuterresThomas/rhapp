import AverageAgeCalc from "@/components/dataComponents/averageAge"
import AverageSalaryCalc from "@/components/dataComponents/averageSalary"
import GenderDistTrue from "@/components/dataComponents/genderDistTrue"
import Sidebar from "@/components/sideBar"


export default function Page() {
    
    return (
        <div className="flex gap-10">
            <div>
                <Sidebar />
            </div>
            <div className="justify-center flex-col flex">
                <AverageAgeCalc />
                <GenderDistTrue/>
                <AverageSalaryCalc />
            </div>
        </div>
    )
}