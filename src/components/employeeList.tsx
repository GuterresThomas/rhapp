'use client'
import { useState, useEffect } from "react";
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
        const response = await fetch('http://localhost:3000/employee')
        const data = await response.json()
        setEmployees(data)
    }

    useEffect(() => {
        fetchEmployees()
    }, [])

    return (
        <div>
            <h1>Lista de Funcionários</h1>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>
                        <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>{employee.name}</AccordionTrigger>
                            <AccordionContent>
                            <p>Infomrações pessoais:</p>
                            {employee.birthdate}
                            {employee.gender }
                            {employee.marital_status }
                            {employee.cpf }
                            <p>Informações de contato:</p>
                            {employee.adress }
                            {employee.phone }
                            {employee.email }
                            <p>Detalhes do emprego:</p>
                            {employee.position}
                            {employee.departament}
                            {employee.hire_date}
                            {employee.salary}
                            </AccordionContent>
                        </AccordionItem>
                        </Accordion>
                        </li>
                
                ))}
            </ul>
        </div>
    )
}