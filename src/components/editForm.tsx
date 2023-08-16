'use client'
import { useState, useEffect } from "react";

export default function EditForm() {
    const [employees, setEmployees] = useState([])
    const [editedEmployee, setEditedEmployee] = useState({
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

    
    const handleSubmit = (event) => {
        event.preventDefault();
        editEmployee();
        alert('Funcionário editado')
        window.location.reload()
    }

    const editEmployee = async () => {
        const response = await fetch(`http://localhost:3000/employees/${editedEmployee.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedEmployee),
        });
        if (response.status === 200) {
            fetchEmployees()
        }
    }
    
    
    
    useEffect(() => {
        fetchEmployees()
    }, [])

    return (
        <div>
            <h1 className="flex justify-center">Editar funcionário</h1>
            <div className="flex justify-center m-4 p-4">
                <form onSubmit={handleSubmit} className="flex-col flex justify-center gap-2">
                    <label htmlFor="name">Nome:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="name" name="name" value={editedEmployee.name} onChange={(e) => seteditedEmployee({ ...editedEmployee, name: e.target.value })} />
                    
                    <label htmlFor="birthdate">Data de Nascimento:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="birthdate" name="birthdate" value={editedEmployee.birthdate} onChange={(e) => seteditedEmployee({ ...editedEmployee, birthdate: e.target.value })} />
                    
                    <label htmlFor="gender">Genêro:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="gender" name="gender" value={editedEmployee.gender} onChange={(e) => seteditedEmployee({ ...editedEmployee, gender: e.target.value })} />
                    
                    <label htmlFor="marital_status">Estado civil:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="marital_status" name="marital_status" value={editedEmployee.marital_status} onChange={(e) => seteditedEmployee({ ...editedEmployee, marital_status: e.target.value })} />

                    <label htmlFor="cpf">CPF:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="cpf" name="cpf" value={editedEmployee.cpf} onChange={(e) => seteditedEmployee({ ...editedEmployee, cpf: e.target.value })} />

                    <label htmlFor="adress">Endereço:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="adress" name="adress" value={editedEmployee.adress} onChange={(e) => seteditedEmployee({ ...editedEmployee, adress: e.target.value })} />
                    
                    <label htmlFor="phone">Telefone:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="phone" name="phone" value={editedEmployee.phone} onChange={(e) => seteditedEmployee({ ...editedEmployee, phone: e.target.value })} />
                    
                    <label htmlFor="email">Email:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="email" name="email" value={editedEmployee.email} onChange={(e) => seteditedEmployee({ ...editedEmployee, email: e.target.value })} />

                    <label htmlFor="position">Cargo:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="position" name="position" value={editedEmployee.position} onChange={(e) => seteditedEmployee({ ...editedEmployee, position: e.target.value })} />

                    <label htmlFor="department">Departamento:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="department" name="department" value={editedEmployee.department} onChange={(e) => seteditedEmployee({ ...editedEmployee, department: e.target.value })} />

                    <label htmlFor="hire_date">Data de contratação:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="hire_date" name="hire_date" value={editedEmployee.hire_date} onChange={(e) => seteditedEmployee({ ...editedEmployee, hire_date: e.target.value })} />

                    <label htmlFor="salary">Salário</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="salary" name="salary" value={editedEmployee.salary} onChange={(e) => seteditedEmployee({ ...editedEmployee, salary: e.target.value })} />

                    <button type="submit">Editar Funcionário</button>
                </form>
            
            </div>
        </div>
    )
}