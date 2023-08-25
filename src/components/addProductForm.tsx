'use client'
import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"


export default function AddProductForm() {
    const [products, setProducts] = useState([])
    const [newProduct, setNewProduct] = useState({
        name: '',
        description:'',
        price: 0,
        stock_quantity: 0,
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
                description:'',
                price: 0,
                stock_quantity: 0,
            })
            fetchProducts()
        }     
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        addProduct();
        alert('produto adicionado')
        window.location.reload()
    }   
    
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="flex flex-col justify-center  p-4 bg-sky-100 rounded-xl h-screen">
            <ScrollArea>
                <div>
                    <span className="font-bold p-2 m-2">Adicionar cliente:</span>
                </div>
                <form onSubmit={handleSubmit} className="flex-col flex justify-center gap-2 p-2 ">
                    <label htmlFor="name">Nome do produto:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="name" name="name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
                    
                    <label htmlFor="description">Descrição do produto:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="description" name="description" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} />
                    
                    <label htmlFor="price">Preço:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="price" name="price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
                    
                    <label htmlFor="stock_quantity">Quantidade:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="stock_quantity" name="stock_quantity" value={newProduct.stock_quantity} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
                    
                    <button type="submit" className="bg-sky-50 p-3 font-bold rounded-xl hover:bg-sky-200 m-2">Adicionar Produto</button>
                </form>
            </ScrollArea>
        </div>
        
    )
}