import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"

function EditProductForm({ product, onUpdate }) {
  const [editedProduct, setEditedProduct] = useState(product);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/products/${editedProduct.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedProduct),
      });

      if (response.ok) {
        onUpdate(editedProduct);
        alert('Produto atualizado!')
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
                <span className="font-bold p-2 m-2">Editar Produto:</span>
            </div>
            <form onSubmit={handleSubmit} className="flex-col flex justify-center gap-2 p-2 ">
                <label htmlFor="name">Nome:</label>
                <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="name" name="name" value={editedProduct.name} onChange={handleInputChange} required />
                
                <label htmlFor="description">Descrição:</label>
                <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="description" name="description" value={editedProduct.description} onChange={handleInputChange} required />
                
                <label htmlFor="price">Preço:</label>
                <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="number" id="price" name="price" value={editedProduct.price} onChange={handleInputChange} required />
                
                <label htmlFor="stock_quantity">Quantidade: </label>
                <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="number" id="stock_quantity" name="stock_quantity" value={editedProduct.stock_quantity} onChange={handleInputChange} required />
                
                
                <button type="submit" className="bg-sky-50 p-3 font-bold rounded-xl hover:bg-sky-200 m-2">Editar Produto</button>
            </form>
        </ScrollArea>
    </div>   

  );
}

export default EditProductForm;
