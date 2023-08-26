'use client'
import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function AddSaleForm() {
    const [customers, setCustomers] = useState([])
    const [sales, setSales] = useState([]);
    const [newSale, setNewSale] = useState({
        date: '',
        total: 0,
        customer_id: null,
    });

    const fetchSales = async () => {
        const response = await fetch('http://localhost:3000/sales');
        const data = await response.json();
        setSales(data);
        console.log(data);
    };
    
    const fetchCustomers = async () => {
        const response = await fetch('http://localhost:3000/customers')
        const data = await response.json()
        setCustomers(data)
    }

    const addSale = async () => {
        const response = await fetch('http://localhost:3000/sales', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newSale),
        });
        if (response.status === 201) {
            setNewSale({
                date: '',
                total: 0,
                customer_id: null,
            });
            fetchSales();
        }     
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addSale();
        alert('Venda adicionada');
        window.location.reload();
    };

    useEffect(() => {
        fetchSales();
    }, []);

    return (
        <div className="flex flex-col justify-center  p-4 bg-sky-100 rounded-xl h-screen">
            <ScrollArea>
                <div>
                    <span className="font-bold p-2 m-2">Adicionar venda:</span>
                </div>
                <form onSubmit={handleSubmit} className="flex-col flex justify-center gap-2 p-2 ">
                    <label htmlFor="date">Data:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="date" name="date" value={newSale.date} onChange={(e) => setNewSale({ ...newSale, date: e.target.value })} />
                    
                    <label htmlFor="total">Total:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="total" name="total" value={newSale.total} onChange={(e) => setNewSale({ ...newSale, total: e.target.value })} />
                    
                    <label htmlFor="customer_id">ID do Cliente:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="customer_id" name="customer_id" value={newSale.customer_id} onChange={(e) => setNewSale({ ...newSale, customer_id: e.target.value })} />
                    
                    <button type="submit" className="bg-sky-50 p-3 font-bold rounded-xl hover:bg-sky-200 m-2">Adicionar Venda</button>
                </form>
            </ScrollArea>
        </div>
    );
}
