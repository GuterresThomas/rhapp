'use client'
import { useState, useEffect } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { ScrollArea } from "@/components/ui/scroll-area"

export default function RecentSales() {

    const [recentSales, setRecentSales] = useState([])


    useEffect(() => {
        const fetchRecentSales = async (count) => {
          try {
            const response = await fetch(`http://localhost:3000/sales?limit=${count}&sort=date:desc`);
            if (response.ok) {
              const data = await response.json();
              setRecentSales(data);
            } else {
              console.error('Erro ao buscar vendas:', response.statusText);
            }
          } catch (error) {
            console.error('Erro ao buscar vendas:', error);
          }
        };
    
        // Chamando a função para buscar as 3 últimas vendas quando o componente é montado
        fetchRecentSales(3);
      }, []); // O array vazio assegura que o efeito seja executado apenas uma vez, quando o componente é montado.
    
      // Agora, recentSales contém as 3 últimas vendas
      console.log(recentSales);

      return (
        <div className="h-[250px]">
           <ScrollArea className="h-[250px] space-y-1">
                <ul className="font-normal p-3">
                    {recentSales.map((sale) => (
                        <li key={sale.id}>
                            <p>Cliente: {sale.customer_name}</p>
                            <p>Data: {sale.date}</p>
                            <p>Total: R$ {sale.total}</p>
                            {/* Renderize outros detalhes da venda aqui */}
                        </li>
                    ))}
                </ul>
           </ScrollArea>
        </div>
      )
}