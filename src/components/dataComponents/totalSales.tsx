'use client'

import { useState, useEffect } from "react"


export default function TotalSales() {
    const [sales, setSales] = useState([])
    const [totalSales, setTotalSales] = useState(0);


    const fetchSales = async () => {
        try {
          const response = await fetch("http://localhost:3000/sales");
          if (!response.ok) {
            throw new Error("Erro na solicitação de vendas");
          }
          const data = await response.json();
          setSales(data);
    
          // Calcular a soma total das vendas
          const total = data.reduce((accumulator, sale) => {
            return accumulator + parseFloat(sale.total);
          }, 0);
    
          setTotalSales(total);
          console.log('total:' + total)
        } catch (error) {
          console.error("Erro ao buscar vendas:", error);
        }
      };

    useEffect(() => {
        fetchSales()
    }, [])

    return (
        <div>
            <p>Total: R$ {typeof totalSales === 'number' ? totalSales.toFixed(2) : 'N/A'}</p>
        </div>
      );
}