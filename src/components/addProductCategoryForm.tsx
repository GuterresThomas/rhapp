'use client'
import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"

export default function AddProductCategoryForm() {
    const [productsCategories, setProductsCategories] = useState([])
    const [newProductCategory, setNewProductCategory] = useState({
        name: '',
    })

    const fetchProductsCategories = async () => {
        const response = await fetch('http://localhost:3000/products_categories')
        const data = await response.json()
        setProductsCategories(data)
        console.log(data)
    }
    const addProductCategory =async () => {
        const response = await fetch('http://localhost:3000/products_categories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProductCategory),
        })
        if (response.status === 201) {
            setNewProductCategory({
                name: '',
            })
            fetchProductsCategories()
        }     
    }
    const handleSubmitCategory = (event) => {
        event.preventDefault();
        addProductCategory();
        alert('Categoria de Produto adicionado')
        window.location.reload()
    }

    useEffect(() => {
        fetchProductsCategories()
    }, [])

    return (
        <div className="flex flex-col justify-center  p-4 bg-sky-100 rounded-xl h-screen">
            <ScrollArea>
                <div>
                    <span className="font-bold p-2 m-2">Adicionar Categoria de Produto:</span>
                </div>
                <form onSubmit={handleSubmitCategory} className="flex-col flex justify-center gap-2 p-2 ">
                    <label htmlFor="name">Nome:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="name" name="name" value={newProductCategory.name} onChange={(e) => setNewProductCategory({ ...newProductCategory, name: e.target.value })} />
                                            
                    <button type="submit" className="bg-sky-50 p-3 font-bold rounded-xl hover:bg-sky-200 m-2">Adicionar Produto</button>
                </form>
            </ScrollArea>
        </div>
    )
}