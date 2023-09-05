'use client'
import { useState, useEffect } from "react";
import Link from "next/link"
import EditCustomerForm from "@/components/customer/editCustomerForm"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { ScrollArea } from "@/components/ui/scroll-area"


  interface SalesListProps {
    paymentMethod: string;
  }


export default function SalesList() {
    const [sales, setSales] = useState([]);

    const fetchSales = async () => {
        try {
        const response = await fetch("http://localhost:3000/sales");
        if (response.ok) {
            const data = await response.json();
            setSales(data);
        } else {
            console.error("Erro ao buscar vendas:", response.statusText);
        }
        } catch (error) {
        console.error("Erro ao buscar vendas:", error);
        }
    };

    const deleteSale = async (id) => {
        const response = await fetch(`http://localhost:3000/sales/${id}`, {
            method: 'DELETE'
        });
        if (response.status === 204) {
            fetchSales()
            alert('venda excluida com sucesso!')
        }
    }    

  useEffect(() => {
    fetchSales();
  }, []);
    
    return(
        <div className="h-screen">
            <div className="h-[480px] m-2 bg-sky-100 rounded-xl p-2 w-[780px] shadow-black shadow-md">
                <div className="text-center">
                    <h1 className="font-bold p-2">Lista de Vendas:</h1>
                </div>
                <ScrollArea>
                    <ul>
                        {sales.map((sale) => (
                            <li key={sale.id}>
                                 <Accordion type="single" collapsible >
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger><div>{sale.customer_name}</div></AccordionTrigger>
                                        <AccordionContent className="overflow-x-hidden h-[200px] scroll-smooth">
                                            <ScrollArea className="h-[240px] ">
                                                <div className="gap-2">
                                                    <h3 className="font-bold">Informações da venda:</h3>
                                                    <div className="m-2 "><p className="font-semibold">Total:</p>{sale.total } R$</div>
                                                    <div className="m-2 "><p className="font-semibold">Data:</p>{sale.date}</div>
                                                    <div>
                                                        <p className="font-semibold">Método de Pagamento:</p>
                                                        <p>{sale.payment_method}</p>
                                                    </div>
                                                    <button onClick={() => deleteSale(sale.id)} className="bg-sky-50 p-3 font-bold rounded-xl hover:bg-sky-200 m-2">Excluir Venda</button>
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