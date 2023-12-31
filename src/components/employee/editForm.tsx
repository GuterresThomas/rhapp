import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"

function EditForm({ employee, onUpdate }) {
  const [editedEmployee, setEditedEmployee] = useState(employee);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/employees/${editedEmployee.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedEmployee),
      });

      if (response.ok) {
        onUpdate(editedEmployee);
        alert('Funcionário editado com sucesso!')
      } else {
        // Handle error response
      }
    } catch (error) {
      console.error("Error updating employee:", error);
      // Handle error
    }
  };

  return (
        <div className="flex flex-col justify-center  p-4 bg-sky-100 rounded-xl h-screen">
            <ScrollArea>
                <div>
                    <span className="font-bold p-2 m-2">Editar Funcionário:</span>
                </div>
                <form onSubmit={handleSubmit} className="flex-col flex justify-center gap-2 p-2 ">
                    <label htmlFor="name">Nome:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="name" name="name" value={editedEmployee.name} onChange={handleInputChange} required />
                    
                    <label htmlFor="birthdate">Data de Nascimento:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="birthdate" name="birthdate" value={editedEmployee.birthdate} onChange={handleInputChange} required />
                    
                    <label htmlFor="gender">Genêro:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="gender" name="gender" value={editedEmployee.gender} onChange={handleInputChange} required />
                    
                    <label htmlFor="marital_status">Estado civil:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="marital_status" name="marital_status" value={editedEmployee.marital_status} onChange={handleInputChange} required />

                    <label htmlFor="cpf">CPF:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="cpf" name="cpf" value={editedEmployee.cpf} onChange={handleInputChange} required />

                    <label htmlFor="address">Endereço:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="address" name="address" value={editedEmployee.address} onChange={handleInputChange} required />
                    
                    <label htmlFor="phone">Telefone:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="phone" name="phone" value={editedEmployee.phone} onChange={handleInputChange} required />
                    
                    <label htmlFor="email">Email:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="email" name="email" value={editedEmployee.email} onChange={handleInputChange} required />

                    <label htmlFor="position">Cargo:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="position" name="position" value={editedEmployee.position} onChange={handleInputChange} required />

                    <label htmlFor="department">Departamento:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="department" name="department" value={editedEmployee.department} onChange={handleInputChange} required />

                    <label htmlFor="hire_date">Data de contratação:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="hire_date" name="hire_date" value={editedEmployee.hire_date} onChange={handleInputChange} required />

                    <label htmlFor="salary">Salário</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="salary" name="salary" value={editedEmployee.salary} onChange={handleInputChange} required />

                    <button type="submit" className="bg-sky-50 p-3 font-bold rounded-xl hover:bg-sky-200 m-2">Salvar</button>
                </form>
        </ScrollArea>
    </div>

  );
}

export default EditForm;
