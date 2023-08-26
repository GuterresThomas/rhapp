import ProductList from "@/components/productList"
import Sidebar from "@/components/sideBar"


export default function AddFormPage() {
    return (
        <div className="flex gap-10">
            <div>
                <Sidebar />
            </div>
            <div className="justify-center flex">
                <ProductList />
            </div>
        </div>
    )
}