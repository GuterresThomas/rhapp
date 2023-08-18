'use client'
import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"


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
        setEmployees(data);
        if (data.length > 0) {
            setEditedEmployee(data[0]);
        }
    }

    

    
    const handleSubmit = (event) => {
        event.preventDefault();
        editEmployee();
        alert('Funcionário editado')
        window.location.reload()
    }

    const editEmployee = async (id) => {
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
        <div className="flex flex-col justify-center  p-4 bg-sky-100 rounded-xl h-screen">
            <ScrollArea>
                <h1 className="flex justify-center font-bold p-2 m-2">Editar funcionário</h1>
                <div className="flex justify-center m-4 p-4 bg-sky-100 rounded-xl">
                    <form onSubmit={handleSubmit} className="flex-col flex justify-center gap-2">
                        <label htmlFor="name">Nome:</label>
                        <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="name" name="name" value={editedEmployee.name} onChange={(e) => setEditedEmployee({ ...editedEmployee, name: e.target.value })} />
                        
                        <label htmlFor="birthdate">Data de Nascimento:</label>
                        <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="birthdate" name="birthdate" value={editedEmployee.birthdate} onChange={(e) => setEditedEmployee({ ...editedEmployee, birthdate: e.target.value })} />
                        
                        <label htmlFor="gender">Genêro:</label>
                        <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="gender" name="gender" value={editedEmployee.gender} onChange={(e) => setEditedEmployee({ ...editedEmployee, gender: e.target.value })} />
                        
                        <label htmlFor="marital_status">Estado civil:</label>
                        <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="marital_status" name="marital_status" value={editedEmployee.marital_status} onChange={(e) => setEditedEmployee({ ...editedEmployee, marital_status: e.target.value })} />

                        <label htmlFor="cpf">CPF:</label>
                        <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="cpf" name="cpf" value={editedEmployee.cpf} onChange={(e) => setEditedEmployee({ ...editedEmployee, cpf: e.target.value })} />

                        <label htmlFor="adress">Endereço:</label>
                        <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="adress" name="adress" value={editedEmployee.adress} onChange={(e) => setEditedEmployee({ ...editedEmployee, adress: e.target.value })} />
                        
                        <label htmlFor="phone">Telefone:</label>
                        <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="phone" name="phone" value={editedEmployee.phone} onChange={(e) => setEditedEmployee({ ...editedEmployee, phone: e.target.value })} />
                        
                        <label htmlFor="email">Email:</label>
                        <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="email" name="email" value={editedEmployee.email} onChange={(e) => setEditedEmployee({ ...editedEmployee, email: e.target.value })} />

                        <label htmlFor="position">Cargo:</label>
                        <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="position" name="position" value={editedEmployee.position} onChange={(e) => setEditedEmployee({ ...editedEmployee, position: e.target.value })} />

                        <label htmlFor="department">Departamento:</label>
                        <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="department" name="department" value={editedEmployee.department} onChange={(e) => setEditedEmployee({ ...editedEmployee, department: e.target.value })} />

                        <label htmlFor="hire_date">Data de contratação:</label>
                        <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="hire_date" name="hire_date" value={editedEmployee.hire_date} onChange={(e) => setEditedEmployee({ ...editedEmployee, hire_date: e.target.value })} />

                        <label htmlFor="salary">Salário</label>
                        <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="salary" name="salary" value={editedEmployee.salary} onChange={(e) => setEditedEmployee({ ...editedEmployee, salary: e.target.value })} />

                        <button type="submit" className="bg-sky-50 p-3 font-bold rounded-xl hover:bg-sky-200 m-2">Editar Funcionário</button>
                    </form>
                </div>
            </ScrollArea>
        </div>
    )
}