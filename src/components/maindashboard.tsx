import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import AverageAgeCalc from "@/components/dataComponents/averageAge"
import AverageSalaryCalc from "@/components/dataComponents/averageSalary"
import GenderDistTrue from "@/components/dataComponents/genderDistTrue"
import PaymentDistTrue from "@/components/dataComponents/paymentDistTrue"
import TotalSales from "@/components/dataComponents/totalSales"
import RecentSales from "@/components/dataComponents/recentSales"

export default function MainDashboard() {
  return (
    <>
      <div className="hidden flex-col md:flex h-[590px] shadow-black shadow-md">
        <div className="border-b">
          <div className="flex  items-center px-4">
            <div className="ml-auto flex items-center space-x-4">
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Painel</h2>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="shadow-black shadow-sm hover:bg-sky-200 rounded-xl">
              <TabsTrigger value="overview" className="font-semibold text-lg m-2 ">Funcionários</TabsTrigger>
            </TabsList>
            <TabsList className="shadow-black shadow-sm m-2 hover:bg-sky-200 rounded-xl">
              <TabsTrigger value="2" className="font-semibold text-lg m-2 ">Vendas</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                <Card className="shadow-black h-[200px] shadow-md rounded-xl">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-semibold">
                      Salários:
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <p className="text-md font-semibold">
                        <AverageSalaryCalc />
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="shadow-black h-[200px] shadow-md rounded-xl">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-semibold">
                      Idade:
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <p className="text-md font-semibold">
                      <AverageAgeCalc />
                    </p>
                  </CardContent>
                </Card>
                <Card className="shadow-black h-[430px] shadow-md rounded-xl">
                  <CardHeader>
                    <CardTitle>Distribuição de Genêro entre os funcionários:</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <GenderDistTrue />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="2" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="shadow-black shadow-md rounded-xl">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-semibold">
                      Últimas Vendas:
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <p className="text-md font-semibold">
                        <RecentSales/>
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="shadow-black shadow-md h-[200px] rounded-xl">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-semibold">
                      Total de vendas:
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <p className="text-md font-semibold">
                      <TotalSales />
                    </p>
                  </CardContent>
                </Card>
                <Card className="shadow-black shadow-md ml-2 w-[260px] rounded-xl">
                  <CardHeader>
                    <CardTitle>Distribuição de métodos de pagamento:</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <PaymentDistTrue />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}