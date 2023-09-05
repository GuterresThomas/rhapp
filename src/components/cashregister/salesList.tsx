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
    saleItems: {
        product_name: string;
        quantity: number;
        subtotal: number;
      }[];
  }


export default function SalesList() {
    const [sales, setSales] = useState([]);
    const [saleItems, setSaleItems] = useState({});

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

    const fetchSaleItems = async (id) => {
        try {
          const response = await fetch(`http://localhost:3000/sales/${id}/sale_items`);
          if (response.ok) {
            const data = await response.json();
            setSaleItems((prevItems) => ({
              ...prevItems,
              [id]: data, // Armazene os itens de venda no estado com a ID da venda como chave
            }));
          } else {
            console.error("Erro ao buscar itens de venda:", response.statusText);
          }
        } catch (error) {
          console.error("Erro ao buscar itens de venda:", error);
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
            <div className="m-2 bg-sky-100 rounded-xl p-2  shadow-black shadow-md">
                <div className="text-center">
                    <h1 className="font-bold p-2">Lista de Vendas:</h1>
                </div>
                <ScrollArea className="h-[500px] w-[780px]">
                    <ul>
                        {sales.map((sale) => (
                            <li key={sale.id}>
                                 <Accordion type="single" collapsible >
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger><div>{sale.customer_name}</div></AccordionTrigger>
                                        <AccordionContent className="overflow-x-hidden h-[250px] scroll-smooth">
                                            <ScrollArea className="h-[240px] ">
                                                <div className="gap-2">
                                                    <h3 className="font-bold">Informações da venda:</h3>
                                                    <div className="m-2 "><p className="font-semibold">Total:</p>{sale.total } R$</div>
                                                    <div className="m-2 "><p className="font-semibold">Data:</p>{sale.date}</div>
                                                    <div>
                                                        <p className="font-semibold">Método de Pagamento:</p>
                                                        <p>{sale.payment_method}</p>
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold">Produtos Vendidos:</p>
                                                        <ul>
                                                        {saleItems[sale.id]?.map((item) => (
                                                            <li key={item.product_name}>
                                                            {item.product_name} - Quantidade:{" "}
                                                            {item.quantity} - Subtotal: {item.subtotal} R$
                                                            </li>
                                                        ))}
                                                        </ul>
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