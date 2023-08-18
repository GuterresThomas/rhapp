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

  

  

export default function EmployeeList() {
    const [employees, setEmployees] = useState([])
    const [newEmployee, setNewEmployee] = useState({
        name: '',
        birthdate: '',
        gender: '',
        marital_status: '',
        cpf: '',
        address: '',
        phone: '',
        email: '',
        position: '',
        department: '',
        hire_date: '',
        salary: '',
    })
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredEmployees, setFilteredEmployees] = useState([])

    const fetchEmployees = async () => {
        const response = await fetch('http://localhost:3000/employees')
        const data = await response.json()
        setEmployees(data)
    }

    const deleteEmployee = async (id) => {
        const response = await fetch(`http://localhost:3000/employees/${id}`, {
            method: 'DELETE'
        });
        if (response.status === 204) {
            fetchEmployees()
            alert('funcionário excluido com sucesso!')
        }
    }

    const editEmployee = async () => {
        const response = await fetch(`http://localhost:3000/employees/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedEmployeeData),
        });
        if (response.status === 200) {
            fetchEmployees()
            alert('Funcionário editado com sucesso!');
        }
    }

    useEffect(() => {
        fetchEmployees()
    }, [])
    
    useEffect(() => {
        const filteredEmployees = employees.filter((employee) =>
          employee.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredEmployees(filteredEmployees);
      }, [searchTerm, employees]);

    return (
        <div className="h-screen">
            <div>
                <h1 className="font-bold p-2">Lista de Funcionários:</h1>
            </div>    
            <div className="flex justify-center bg-sky-100 rounded-xl p-2">
                <ScrollArea className="overflow-x-hidden h-[480px] scroll-smooth">
                    <input
                            type="text"
                            placeholder="Pesquisar funcionários..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="p-2 rounded-xl"
                        />
                        <ul>
                            {filteredEmployees.map((employee) => (
                            <li key={employee.id}>
                                <Accordion type="single" collapsible >
                                            <AccordionItem value="item-1">
                                                <AccordionTrigger><div>{employee.name}</div></AccordionTrigger>
                                                <AccordionContent className="overflow-x-hidden h-[480px] scroll-smooth">
                                                    <ScrollArea className="h-[450px] ">
                                                        <div className="gap-2">
                                                            <h3 className="font-bold">Informações pessoais:</h3>
                                                            <div className="m-2 "><p className="font-semibold">Data de nascimento:</p>{employee.birthdate}</div>
                                                            <div className="m-2 "><p className="font-semibold">Sexo:</p>{employee.gender }</div>
                                                            <div className="m-2 "><p className="font-semibold">Estado civil:</p>{employee.marital_status }</div>
                                                            <div className="m-2 "><p className="font-semibold">CPF:</p>{employee.cpf }</div>
                                                            <p className="font-bold">Informações de contato:</p>
                                                            <div className="m-2 "><p className="font-semibold">Endereço:</p>{employee.address }</div>
                                                            <div className="m-2 "><p className="font-semibold">Telefone:</p>{employee.phone }</div>
                                                            <div className="m-2 "><p className="font-semibold">Email:</p>{employee.email }</div>
                                                            <p className="font-bold">Detalhes do emprego:</p>
                                                            <div className="m-2 "><p className="font-semibold">Cargo:</p>{employee.position}</div>
                                                            <div className="m-2 "><p className="font-semibold">Departamento:</p>{employee.department}</div>
                                                            <div className="m-2 "><p className="font-semibold">Data de admissão:</p>{employee.hire_date}</div>
                                                            <div className="m-2 "><p className="font-semibold">Salário:</p>{employee.salary}</div>
                                                            <button onClick={() => deleteEmployee(employee.id)} className="bg-sky-50 p-3 font-bold rounded-xl hover:bg-sky-200 m-2">Excluir funcionário(a)</button>
                                                            <Link href={`/editForm?id=${employee.id}`}><button className="bg-sky-50 p-3 font-bold rounded-xl hover:bg-sky-200 m-2">Editar funcionário(a)</button></Link>
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