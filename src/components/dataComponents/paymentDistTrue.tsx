'use client'
import React, { useState, useEffect } from 'react';
import PaymentDistChart from '@/components/dataComponents/paymentDist';


export default function PaymentDistTrue() {
    const [sales, setSales] = useState([])
    const fetchSales = async () => {
        const response = await fetch('http://localhost:3000/sales');
        const data = await response.json();
        setSales(data);
    };

    useEffect(() => {
        
        fetchSales();
    }, []);

    return (
        <div>
            <p>Distribuição de pagamento das vendas:</p>
            <PaymentDistChart sales={sales} />
        </div>
    )
}