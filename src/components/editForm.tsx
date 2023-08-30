import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"

function EditForm({ employee, onSave }) {
  const [editedEmployee, setEditedEmployee] = useState(employee);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedEmployee);
  };

  return (
        <div className="flex flex-col justify-center  p-4 bg-sky-100 rounded-xl h-screen">
            <ScrollArea>
                <div>
                    <span className="font-bold p-2 m-2">Adicionar Funcionário:</span>
                </div>
                <form onSubmit={handleSubmit} className="flex-col flex justify-center gap-2 p-2 ">
                    <label htmlFor="name">Nome:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="name" name="name" value={editedEmployee.name} onChange={handleInputChange} />
                    
                    <label htmlFor="birthdate">Data de Nascimento:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="birthdate" name="birthdate" value={editedEmployee.birthdate} onChange={handleInputChange} />
                    
                    <label htmlFor="gender">Genêro:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="gender" name="gender" value={editedEmployee.gender} onChange={handleInputChange} />
                    
                    <label htmlFor="marital_status">Estado civil:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="marital_status" name="marital_status" value={} />

                    <label htmlFor="cpf">CPF:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="cpf" name="cpf" value={editedEmployee.cpf} onChange={handleInputChange} />

                    <label htmlFor="address">Endereço:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="address" name="address" value={editedEmployee.address} onChange={handleInputChange} />
                    
                    <label htmlFor="phone">Telefone:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="phone" name="phone" value={editedEmployee.phone} onChange={handleInputChange} />
                    
                    <label htmlFor="email">Email:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="email" name="email" value={editedEmployee.email} onChange={handleInputChange} />

                    <label htmlFor="position">Cargo:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="position" name="position" value={editedEmployee.position} onChange={handleInputChange} />

                    <label htmlFor="department">Departamento:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="department" name="department" value={editedEmployee.department} onChange={handleInputChange} />

                    <label htmlFor="hire_date">Data de contratação:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="hire_date" name="hire_date" value={editedEmployee.hire_date} onChange={handleInputChange} />

                    <label htmlFor="salary">Salário</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="salary" name="salary" value={editedEmployee.salary} onChange={} />

                    <button type="submit" className="bg-sky-50 p-3 font-bold rounded-xl hover:bg-sky-200 m-2">Salvar</button>
                </form>
        </ScrollArea>
    </div>

  );
}

export default EditForm;
