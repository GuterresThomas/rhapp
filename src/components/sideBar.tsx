'use client'
import ButtonLogOut from "@/components/buttonLogOut"
import Link from "next/link"
function Sidebar() {
    return (
        <div>
            <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0">

            </div>
            <div className="bg-sky-100">
                <div className="flex-col flex">
                    <div className="w-full border-b-2 border-gray-200">
                    </div>
                    <div className="flex bg-gray-100  overflow-x-hidden  h-screen">
                        <div className="bg-sky-100 lg:flex md:w-64 md:flex-col hidden">
                            <div className="flex-col pt-5 flex overflow-y-auto">
                                <div className="h-full flex-col justify-between px-4 flex">
                                    <div className="space-y-4">
                                        <div className="bg-top bg-cover space-y-1">
                                            <Link href="/userPage" className="font-medium text-sm items-center rounded-xl text-gray-900 px-4 py-2.5 flex
                                                    transition-all duration-200 hover:bg-sky-200 group cursor-pointer">
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                                <svg className="flex-shrink-0 w-5 h-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                    viewbox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round"
                                                                        stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1
                                                                        1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span>Página inicial</span>
                                            </Link>
                                            <Link href="/addform" className="font-medium text-sm items-center rounded-xl text-gray-900 px-4 py-2.5 block
                                            transition-all duration-200 hover:bg-sky-200 group cursor-pointer">
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                                <svg className="mr-4" width="24" height="24" viewbox="0 0 24 24" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg" /><path d="M17 9L13.9558 13.5662C13.5299 14.2051 12.5728
                                                                    14.1455 12.2294 13.4587L11.7706 12.5413C11.4272 11.8545 10.4701 11.7949 10.0442 12.4338L7
                                                                    17" stroke="#4F4F4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><svg
                                                                    x="3" y="3" width="18" height="18" rx="2" stroke="#4F4F4F" stroke-width="2"></svg>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span>Adicionar funcionário</span>
                                            </Link>        
                                            <Link href="/empList" className="font-medium text-sm items-center rounded-xl text-gray-900 px-4 py-2.5 block
                                            transition-all duration-200 hover:bg-sky-200 group cursor-pointer">
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                                <svg className="mr-4" width="24" height="24" viewbox="0 0 24 24" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg" /><path d="M17 9L13.9558 13.5662C13.5299 14.2051 12.5728
                                                                    14.1455 12.2294 13.4587L11.7706 12.5413C11.4272 11.8545 10.4701 11.7949 10.0442 12.4338L7
                                                                    17" stroke="#4F4F4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><svg
                                                                    x="3" y="3" width="18" height="18" rx="2" stroke="#4F4F4F" stroke-width="2"></svg>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span>Lista de funcionários</span>
                                            </Link>
                                            <Link href="/addcustomer" className="font-medium text-sm items-center rounded-xl text-gray-900 px-4 py-2.5 block
                                            transition-all duration-200 hover:bg-sky-200 group cursor-pointer">
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                                <svg className="mr-4" width="24" height="24" viewbox="0 0 24 24" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg" /><path d="M17 9L13.9558 13.5662C13.5299 14.2051 12.5728
                                                                    14.1455 12.2294 13.4587L11.7706 12.5413C11.4272 11.8545 10.4701 11.7949 10.0442 12.4338L7
                                                                    17" stroke="#4F4F4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><svg
                                                                    x="3" y="3" width="18" height="18" rx="2" stroke="#4F4F4F" stroke-width="2"></svg>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span>Adicionar cliente</span>
                                            </Link>
                                            <Link href="/customerlist" className="font-medium text-sm items-center rounded-xl text-gray-900 px-4 py-2.5 block
                                            transition-all duration-200 hover:bg-sky-200 group cursor-pointer">
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                                <svg className="mr-4" width="24" height="24" viewbox="0 0 24 24" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg" /><path d="M17 9L13.9558 13.5662C13.5299 14.2051 12.5728
                                                                    14.1455 12.2294 13.4587L11.7706 12.5413C11.4272 11.8545 10.4701 11.7949 10.0442 12.4338L7
                                                                    17" stroke="#4F4F4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><svg
                                                                    x="3" y="3" width="18" height="18" rx="2" stroke="#4F4F4F" stroke-width="2"></svg>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span>Lista de clientes</span>
                                            </Link>
                                            <Link href="/dashboard" className="font-medium text-sm items-center rounded-xl text-gray-900 px-4 py-2.5 block
                                            transition-all duration-200 hover:bg-sky-200 group cursor-pointer">
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                                <svg className="mr-4" width="24" height="24" viewbox="0 0 24 24" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg" /><path d="M17 9L13.9558 13.5662C13.5299 14.2051 12.5728
                                                                    14.1455 12.2294 13.4587L11.7706 12.5413C11.4272 11.8545 10.4701 11.7949 10.0442 12.4338L7
                                                                    17" stroke="#4F4F4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><svg
                                                                    x="3" y="3" width="18" height="18" rx="2" stroke="#4F4F4F" stroke-width="2"></svg>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span>Painel</span>
                                            </Link>
                                            <Link href="/bulletin" className="font-medium text-sm items-center rounded-xl text-gray-900 px-4 py-2.5 block
                                            transition-all duration-200 hover:bg-sky-200 group cursor-pointer">
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                                <svg className="mr-4" width="24" height="24" viewbox="0 0 24 24" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg" /><path d="M17 9L13.9558 13.5662C13.5299 14.2051 12.5728
                                                                    14.1455 12.2294 13.4587L11.7706 12.5413C11.4272 11.8545 10.4701 11.7949 10.0442 12.4338L7
                                                                    17" stroke="#4F4F4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><svg
                                                                    x="3" y="3" width="18" height="18" rx="2" stroke="#4F4F4F" stroke-width="2"></svg>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span>Quadro de avisos</span>
                                            </Link>   
                                        </div>
                                    </div>
                                    
                                    <div className="mt-12 flex justify-start font-semibold cursor-pointer hover:bg-sky-200 p-4 rounded-xl">
                                        <div className="bg-top bg-cover space-y-1">
                                                <ButtonLogOut />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
}

export default Sidebar;