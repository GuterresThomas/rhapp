import AverageAgeCalc from "@/components/dataComponents/averageAge"
import AverageSalaryCalc from "@/components/dataComponents/averageSalary"
import Sidebar from "@/components/sideBar"


export default function Page() {
    return (
        <div className="flex gap-10">
            <div>
                <Sidebar />
            </div>
            <div className="justify-center flex-col flex">
                <AverageAgeCalc />
                
                <AverageSalaryCalc />
            </div>
        </div>
    )
}