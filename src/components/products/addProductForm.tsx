'use client'
import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"


export default function AddProductForm() {
    const [products, setProducts] = useState([])
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        price: 0,
        stock_quantity: 0,
        product_category_id: 1,
    })
    

    const fetchProducts = async () => {
        const response = await fetch('http://localhost:3000/products')
        const data = await response.json()
        setProducts(data)
    }

    const addProduct =async () => {
        const response = await fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        })
        if (response.status === 201) {
            setNewProduct({
                name: '',
                description: '',
                price: 0,
                stock_quantity: 0,
                product_category_id: 1,
            })
            fetchProducts()
        }     
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        addProduct();
        alert('Produto adicionado')
        window.location.reload()
    }   
    const handleSubmitCategory = (event) => {
        event.preventDefault();
        addProductCategory();
        alert('Categoria de Produto adicionado')
        window.location.reload()
    }   

    
    
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="flex flex-col justify-center  p-4 bg-sky-100 rounded-xl h-screen">
            <ScrollArea>
                <div>
                    <span className="font-bold p-2 m-2">Adicionar Produto:</span>
                </div>
                <form onSubmit={handleSubmit} className="flex-col flex justify-center gap-2 p-2 ">
                    <label htmlFor="name">Nome:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="name" name="name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} required />
                    
                    <label htmlFor="description">Descrição:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="description" name="description" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} required />
                    
                    <label htmlFor="price">Preço:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="number" id="price" name="price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} required />
                    
                    <label htmlFor="stock_quantity">Quantidade: </label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="number" id="stock_quantity" name="stock_quantity" value={newProduct.stock_quantity} onChange={(e) => setNewProduct({ ...newProduct, stock_quantity: e.target.value })} required />
                    
                    
                    <button type="submit" className="bg-sky-50 p-3 font-bold rounded-xl hover:bg-sky-200 m-2">Adicionar Produto</button>
                </form>
            </ScrollArea>
        </div>               
    )
}