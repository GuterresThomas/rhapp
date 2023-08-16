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

    return (
        <div>
            <div>
                <h1>Lista de Funcionários</h1>
            </div>    
        <div className="flex justify-center">
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>
                        <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger><div>{employee.name}</div></AccordionTrigger>
                            <AccordionContent>
                            <div className="gap-2 p-2 m-2">
                                <h3 className="font-bold">Informações pessoais:</h3>
                                <div className="m-2 "><p>Data de nascimento:</p>{employee.birthdate}</div>
                                <div className="m-2 "><p>Sexo:</p>{employee.gender }</div>
                                <div className="m-2 "><p>Estado civil:</p>{employee.marital_status }</div>
                                <div className="m-2 "><p>CPF:</p>{employee.cpf }</div>
                                <p className="font-bold">Informações de contato:</p>
                                <div className="m-2 "><p>Endereço:</p>{employee.adress }</div>
                                <div className="m-2 "><p>Telefone:</p>{employee.phone }</div>
                                <div className="m-2 "><p>Email:</p>{employee.email }</div>
                                <p className="font-bold">Detalhes do emprego:</p>
                                <div className="m-2 "><p>Cargo:</p>{employee.position}</div>
                                <div className="m-2 "><p>Departamento:</p>{employee.departament}</div>
                                <div className="m-2 "><p>Data de admissão:</p>{employee.hire_date}</div>
                                <div className="m-2 "><p>Salário:</p>{employee.salary}</div>
                                <button onClick={() => deleteEmployee(employee.id)} className="bg-sky-50 p-3 font-bold rounded-xl hover:bg-sky-200 m-2">Excluir funcionário(a)</button>
                                <Link href="/editForm"><button className="bg-sky-50 p-3 font-bold rounded-xl hover:bg-sky-200 m-2">Editar funcionário(a)</button></Link>
                            </div>
                            </AccordionContent>
                        </AccordionItem>
                        </Accordion>
                        </li>
                
                ))}
            </ul>
            </div>
        </div>
    )
}