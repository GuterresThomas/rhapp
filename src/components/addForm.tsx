'use client'
import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"


export default function AddForm() {
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

    const addEmployee =async () => {
        const response = await fetch('http://localhost:3000/employees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEmployee),
        })
        if (response.status === 201) {
            setNewEmployee({
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
            fetchEmployees()
        }     
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        addEmployee();
        alert('Funcionário adicionado')
        window.location.reload()
    }   
    
    useEffect(() => {
        fetchEmployees()
    }, [])

    return (
        <div className="flex flex-col justify-center  p-4 bg-sky-100 rounded-xl h-screen">
            <ScrollArea>
                <div>
                    <span className="font-bold p-2 m-2">Adicionar Funcionário:</span>
                </div>
                <form onSubmit={handleSubmit} className="flex-col flex justify-center gap-2 p-2 ">
                    <label htmlFor="name">Nome:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="name" name="name" value={newEmployee.name} onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })} />
                    
                    <label htmlFor="birthdate">Data de Nascimento:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="birthdate" name="birthdate" value={newEmployee.birthdate} onChange={(e) => setNewEmployee({ ...newEmployee, birthdate: e.target.value })} />
                    
                    <label htmlFor="gender">Genêro:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="gender" name="gender" value={newEmployee.gender} onChange={(e) => setNewEmployee({ ...newEmployee, gender: e.target.value })} />
                    
                    <label htmlFor="marital_status">Estado civil:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="marital_status" name="marital_status" value={newEmployee.marital_status} onChange={(e) => setNewEmployee({ ...newEmployee, marital_status: e.target.value })} />

                    <label htmlFor="cpf">CPF:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="cpf" name="cpf" value={newEmployee.cpf} onChange={(e) => setNewEmployee({ ...newEmployee, cpf: e.target.value })} />

                    <label htmlFor="address">Endereço:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="address" name="address" value={newEmployee.address} onChange={(e) => setNewEmployee({ ...newEmployee, address: e.target.value })} />
                    
                    <label htmlFor="phone">Telefone:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="phone" name="phone" value={newEmployee.phone} onChange={(e) => setNewEmployee({ ...newEmployee, phone: e.target.value })} />
                    
                    <label htmlFor="email">Email:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="email" name="email" value={newEmployee.email} onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })} />
    
                    <label htmlFor="position">Cargo:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="position" name="position" value={newEmployee.position} onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })} />
    
                    <label htmlFor="department">Departamento:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="department" name="department" value={newEmployee.department} onChange={(e) => setNewEmployee({ ...newEmployee, department: e.target.value })} />
    
                    <label htmlFor="hire_date">Data de contratação:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="hire_date" name="hire_date" value={newEmployee.hire_date} onChange={(e) => setNewEmployee({ ...newEmployee, hire_date: e.target.value })} />
    
                    <label htmlFor="salary">Salário</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="salary" name="salary" value={newEmployee.salary} onChange={(e) => setNewEmployee({ ...newEmployee, salary: e.target.value })} />

                    <button type="submit" className="bg-sky-50 p-3 font-bold rounded-xl hover:bg-sky-200 m-2">Adicionar Funcionário</button>
                </form>
            </ScrollArea>
        </div>
        
    )
}