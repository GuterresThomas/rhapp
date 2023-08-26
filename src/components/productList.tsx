'use client'
import { useState, useEffect } from "react";
import Link from "next/link"
import EditForm from "@/components/editForm"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { ScrollArea } from "@/components/ui/scroll-area"

  

  

export default function ProductList() {
    const [products, setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredProducts, setFilteredProducts] = useState([])

    const fetchProducts = async () => {
        const response = await fetch('http://localhost:3000/products')
        const data = await response.json()
        setProducts(data)
        console.log(data)
    }

    const deleteProduct = async (id) => {
        const response = await fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE'
        });
        if (response.status === 204) {
            fetchProducts()
            alert('Produto excluido com sucesso!')
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    
    useEffect(() => {
        const filteredProducts = products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filteredProducts);
      }, [searchTerm, products]);

    return (
        <div className="h-screen
        ">
            <div>
                <h1 className="font-bold p-2">Lista de Produtos:</h1>
            </div>    
            <div className="flex justify-center bg-sky-100 rounded-xl p-2">
                <ScrollArea className="overflow-x-hidden h-[480px] scroll-smooth">
                    <input
                            type="text"
                            placeholder="Pesquisar produtos..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="p-2 rounded-xl"
                        />
                        <ul>
                            {filteredProducts.map((product) => (
                            <li key={product.id}>
                                <Accordion type="single" collapsible >
                                            <AccordionItem value="item-1">
                                                <AccordionTrigger><div>{product.name}</div></AccordionTrigger>
                                                <AccordionContent className="overflow-x-hidden h-[480px] scroll-smooth">
                                                    <ScrollArea className="h-[450px] ">
                                                        <div className="gap-2">
                                                            <h3 className="font-bold">Informações do produto:</h3>
                                                            <div className="m-2 "><p className="font-semibold">Descrição do produto:</p>{product.description}</div>
                                                            <div className="m-2 "><p className="font-semibold">Preço:</p>{product.price }$</div>
                                                            <div className="m-2 "><p className="font-semibold">Quantidade no estoque:</p>{product.stock_quantity}</div>
                                                            <button onClick={() => deleteProduct(product.id)} className="bg-sky-50 p-3 font-bold rounded-xl hover:bg-sky-200 m-2">Excluir Produto</button>                                                            
                                                        </div>
                                                    </ScrollArea>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                            </li>
                            ))}
                    </ul>
                </ScrollArea>
            </div>
        </div>
    )
}