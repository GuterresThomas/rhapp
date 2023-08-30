import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"

function EditCustomerForm({ customer, onUpdate }) {
  const [editedCustomer, setEditedCustomer] = useState(customer);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/customers/${editedCustomer.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedCustomer),
      });

      if (response.ok) {
        onUpdate(editedCustomer);
        alert('Cliente atualizado!')
      } else {
        // Handle error response
      }
    } catch (error) {
      console.error("Error updating product:", error);
      // Handle error
    }
  };

  return (
    <div className="flex flex-col justify-center  p-4 bg-sky-100 rounded-xl h-screen">
        <ScrollArea>
            <div>
                <span className="font-bold p-2 m-2">Editar Cliente:</span>
            </div>
            <form onSubmit={handleSubmit} className="flex-col flex justify-center gap-2 p-2 ">
                <label htmlFor="name">Nome:</label>
                <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="name" name="name" value={editedCustomer.name} onChange={handleInputChange} required />
                
                <label htmlFor="contact_info">Dados de contato:</label>
                <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="contact_info" name="contact_info" value={editedCustomer.contact_info} onChange={handleInputChange} required />
                
                <label htmlFor="cpf">CPF:</label>
                <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="cpf" name="cpf" value={editedCustomer.cpf} onChange={handleInputChange} required />
                
                <button type="submit" className="bg-sky-50 p-3 font-bold rounded-xl hover:bg-sky-200 m-2">Editar Cliente</button>
            </form>
        </ScrollArea>
    </div>   

  );
}

export default EditCustomerForm;
