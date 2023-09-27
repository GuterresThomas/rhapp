import ProductList from "@/components/products/productList"
import Sidebar from "@/components/sideBar"
import UserRouteProtection from "@/components/userRouteProtection"



export default function AddFormPage() {
    return (
        <UserRouteProtection>
            <div className="flex gap-10">
                <div>
                    <Sidebar />
                </div>
                <div className="justify-center flex">
                    <ProductList />
                </div>
            </div>
        </UserRouteProtection>
    )
}