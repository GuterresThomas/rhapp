'use client'
import { useState, useEffect } from "react";

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
        const response = await fetch('http://localhost:3000/employee')
        const data = await response.json()
        setEmployees(data)
    }

    const addEmployee =async () => {
        const response = await fetch('http://localhost:3000/notes', {
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
        const handleSubmit = (event) => {
            event.preventDefault();
            addEmployee();
        }      
    }
    
    useEffect(() => {
        fetchEmployees()
    }, [])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" value={newEmployee.name} onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })} />
                
                <label htmlFor="birthdate">Data de Nascimento:</label>
                <input type="text" id="birthdate" name="birthdate" value={newEmployee.birthdate} onChange={(e) => setNewEmployee({ ...newEmployee, birthdate: e.target.value })} />
                
                <label htmlFor="gender">Genêro:</label>
                <input type="text" id="gender" name="gender" value={newEmployee.gender} onChange={(e) => setNewEmployee({ ...newEmployee, gender: e.target.value })} />
                
                <label htmlFor="marital_status">Estado civil:</label>
                <input type="text" id="marital_status" name="marital_status" value={newEmployee.name} onChange={(e) => setNewEmployee({ ...newEmployee, marital_status: e.target.value })} />

                <label htmlFor="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" value={newEmployee.name} onChange={(e) => setNewEmployee({ ...newEmployee, cpf: e.target.value })} />

                <label htmlFor="adress">Endereço:</label>
                <input type="text" id="adress" name="adress" value={newEmployee.name} onChange={(e) => setNewEmployee({ ...newEmployee, adress: e.target.value })} />
                
                <label htmlFor="phone">Telefone:</label>
                <input type="text" id="phone" name="phone" value={newEmployee.name} onChange={(e) => setNewEmployee({ ...newEmployee, phone: e.target.value })} />
                
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" value={newEmployee.name} onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })} />
 
                <label htmlFor="position">Cargo:</label>
                <input type="text" id="position" name="position" value={newEmployee.name} onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })} />
 
                <label htmlFor="departament">Departamento:</label>
                <input type="text" id="departament" name="departament" value={newEmployee.name} onChange={(e) => setNewEmployee({ ...newEmployee, departament: e.target.value })} />
 
                <label htmlFor="hire_date">Data de contratação:</label>
                <input type="text" id="hire_date" name="hire_date" value={newEmployee.name} onChange={(e) => setNewEmployee({ ...newEmployee, hire_date: e.target.value })} />
 
                <label htmlFor="salary">Salário</label>
                <input type="text" id="salary" name="salary" value={newEmployee.name} onChange={(e) => setNewEmployee({ ...newEmployee, salary: e.target.value })} />

                <button type="submit">Adicionar Funcionário</button>
            </form>
        </div>
    )
}