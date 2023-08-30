import AddProductForm from "@/components/products/addProductForm"
import Sidebar from "@/components/sideBar"


export default function AddProductFormPage() {
    return (
        <div className="flex gap-10">
            <div>
                <Sidebar />
            </div>
            <div className="justify-center flex">
                <AddProductForm />
            </div>
        </div>
    )
}