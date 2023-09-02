'use client'
import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"


export default function AddClientForm() {
    const [customers, setCustomers] = useState([])
    const [newCustomer, setNewCustomer] = useState({
        name: '',
        contact_info:'',
        cpf:'',
    })

    const fetchCustomers = async () => {
        const response = await fetch('http://localhost:3000/customers')
        const data = await response.json()
        setCustomers(data)
        console.log(data)
    }

    const addCustomer =async () => {
        const response = await fetch('http://localhost:3000/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCustomer),
        })
        if (response.status === 201) {
            setNewCustomer({
                name: '',
                contact_info:'',
                cpf:'',
            })
            fetchCustomers()
        }     
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        addCustomer();
        alert('Cliente adicionado')
        window.location.reload()
    }   
    
    useEffect(() => {
        fetchCustomers()
    }, [])

    return (
        <div className="flex flex-col justify-center  p-4 bg-sky-100 rounded-xl h-screen w-[780px] shadow-black shadow-md">
            <ScrollArea>
                <div className="text-center">
                    <span className="font-bold p-2 m-2">Adicionar cliente:</span>
                </div>
                <form onSubmit={handleSubmit} className="flex-col flex justify-center gap-2 p-2 ">
                    <label className="font-semibold" htmlFor="name">Nome:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="name" name="name" value={newCustomer.name} onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })} required />
                    
                    <label className="font-semibold" htmlFor="contact_info">Dados de contato:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="contact_info" name="contact_info" value={newCustomer.contact_info} onChange={(e) => setNewCustomer({ ...newCustomer, contact_info: e.target.value })} required />
                    
                    <label className="font-semibold" htmlFor="cpf">CPF:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="cpf" name="cpf" value={newCustomer.cpf} onChange={(e) => setNewCustomer({ ...newCustomer, cpf: e.target.value })} required />
                    
                    <button type="submit" className="bg-sky-50 p-3 font-bold rounded-xl hover:bg-sky-200 m-2">Adicionar Cliente</button>
                </form>
            </ScrollArea>
        </div>
        
    )
}