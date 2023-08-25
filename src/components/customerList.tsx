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

  

  

export default function CustomerList() {
    const [customers, setCustomers] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredCustomers, setFilteredCustomers] = useState([])

    const fetchCustomers = async () => {
        const response = await fetch('http://localhost:3000/customers')
        const data = await response.json()
        setCustomers(data)
    }

    const deleteCustomer = async (id) => {
        const response = await fetch(`http://localhost:3000/customers/${id}`, {
            method: 'DELETE'
        });
        if (response.status === 204) {
            fetchCustomers()
            alert('cliente excluido com sucesso!')
        }
    }

    useEffect(() => {
        fetchCustomers()
    }, [])
    
    useEffect(() => {
        const filteredCustomers = customers.filter((customer) =>
          customer.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCustomers(filteredCustomers);
      }, [searchTerm, customers]);

    return (
        <div className="h-screen
        ">
            <div>
                <h1 className="font-bold p-2">Lista de CLientes:</h1>
            </div>    
            <div className="flex justify-center bg-sky-100 rounded-xl p-2">
                <ScrollArea className="overflow-x-hidden h-[480px] scroll-smooth">
                    <input
                            type="text"
                            placeholder="Pesquisar clientes..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="p-2 rounded-xl"
                        />
                        <ul>
                            {filteredCustomers.map((customer) => (
                            <li key={customer.id}>
                                <Accordion type="single" collapsible >
                                            <AccordionItem value="item-1">
                                                <AccordionTrigger><div>{customer.name}</div></AccordionTrigger>
                                                <AccordionContent className="overflow-x-hidden h-[480px] scroll-smooth">
                                                    <ScrollArea className="h-[450px] ">
                                                        <div className="gap-2">
                                                            <h3 className="font-bold">Informações do cliente:</h3>
                                                            <div className="m-2 "><p className="font-semibold">Dados de contato:</p>{customer.contact_info }</div>
                                                            <div className="m-2 "><p className="font-semibold">CPF:</p>{customer.cpf }</div>
                                                            <button onClick={() => deleteCustomer(customer.id)} className="bg-sky-50 p-3 font-bold rounded-xl hover:bg-sky-200 m-2">Excluir funcionário(a)</button>                                                            
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