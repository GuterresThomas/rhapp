'use client'
import { useState, useEffect } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { ScrollArea } from "@/components/ui/scroll-area"
  import SalesList from "@/components/cashregister/salesList"

interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  interface Customer {
    id: number;
    name: string;
  }

  interface SaleProduct {
    name: string;
    quantity: number;
    price: number;
  }
  
export default function CashRegister() {
    const [availableProducts, setAvailableProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<{ productId: number; quantity: number }[]>([]);
    const [selectedCustomer, setSelectedCustomer] = useState<number | null>(null);
    const [paymentMethod, setPaymentMethod] = useState<string>('dinheiro');
    const [totalAmount, setTotalAmount] = useState<number>(0)
    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch('http://localhost:3000/products');
            if (response.ok) {
              const data = await response.json();
              setAvailableProducts(data);
            } else {
              console.error('Erro ao buscar produtos:', response.statusText);
            }
          } catch (error) {
            console.error('Erro ao buscar produtos:', error);
          }
        };
        const fetchCustomers = async () => {
            try {
              const response = await fetch('http://localhost:3000/customers'); // Substitua pela rota correta para buscar clientes
              if (response.ok) {
                const data = await response.json();
                setCustomers(data);
              } else {
                console.error('Erro ao buscar clientes:', response.statusText);
              }
            } catch (error) {
              console.error('Erro ao buscar clientes:', error);
            }
          };
      
          fetchProducts();
          fetchCustomers(); // Chame a função para buscar clientes
        }, []);
    
    
      useEffect(() => {
        let total = 0;
        for (const item of selectedProducts) {
          const product = availableProducts.find((p) => p.id === item.productId);
          if (product) {
            total += product.price * item.quantity;
          }
        }
        setTotalAmount(total);
      }, [selectedProducts, availableProducts]);
    
      // Função para adicionar um produto à lista de produtos selecionados
      const handleProductSelect = (productId: number) => {
        const existingItem = selectedProducts.find((item) => item.productId === productId);
        if (existingItem) {
          // Se o produto já está na lista, aumente a quantidade
          const updatedItems = selectedProducts.map((item) =>
            item.productId === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          setSelectedProducts(updatedItems);
        } else {
          // Se o produto não está na lista, adicione-o com quantidade 1
          setSelectedProducts([...selectedProducts, { productId, quantity: 1 }]);
        }
      };
    
      // Função para remover um produto da lista de produtos selecionados
      const handleRemoveProduct = (productId: number) => {
        const updatedItems = selectedProducts.filter((item) => item.productId !== productId);
        setSelectedProducts(updatedItems);
      };
    
      // Função para processar o pagamento
      const handleCheckout = async () => {
        if (totalAmount <= 0 ) {
            alert('Erro: Total negativo. Verifique os produtos selecionados.');
            return; 
        }
        if (selectedCustomer === null || selectedCustomer <= 0) {
            alert('Erro: Selecione um cliente antes de concluir a venda.');
            return;
        }
        const saleData = {
          date: new Date(), // Defina a data correta da venda
          total: totalAmount,
          customer_id: selectedCustomer,
          payment_method: paymentMethod,
        };
      
        try {
          const response = await fetch('http://localhost:3000/sales', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sale: saleData }),
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log(data.message); // Venda registrada com sucesso
          } else {
            const errorData = await response.json();
            console.log(errorData.error); // Falha ao registrar a venda
          }
        } catch (error) {
          console.error('Erro ao registrar a venda:', error);
          alert('Erro ao registrar a venda. Verifique sua conexão com o servidor.');
        }
        
        // Implemente a lógica para processar o pagamento, enviar os detalhes para a API, etc.
        console.log('Pagamento processado:', {
          selectedProducts,
          selectedCustomer,
          paymentMethod,
          totalAmount,
        });
        alert('Venda bem sucedida!')
      };
    
      return (
        <div className="bg-sky-100 rounded-xl shadow-black shadow-md w-[780px] p-4 m-2">
          <ScrollArea className="h-[480px]">      
            <div className="font-bold text-center text-xl">
                <h2>Caixa</h2>
            </div>
            <div>
                <div className="font-semibold m-1 text-center text-lg">
                    <h3>Selecionar Produtos</h3>
                </div>
                    <ScrollArea className="h-[120px]">        
                        <ul className="space-y-2 space-x-2">
                            {availableProducts.map((product) => (
                            <li key={product.id}>
                                <span className="font-semibold">{product.name}</span>
                                <button className="ml-2 bg-sky-200 p-1 rounded-xl lowercase hover:bg-sky-100 font-semibold" onClick={() => handleProductSelect(product.id)}>Adicionar</button>
                            </li>
                        ))}
                        </ul>
                    </ScrollArea>
            </div>
            <div>
                <div className="font-semibold text-center m-2">
                    <h3>Produtos Selecionados:</h3>
                </div>
                <ul className="p-2">
                {selectedProducts.map((item) => {
                    const product = availableProducts.find((p) => p.id === item.productId);
                    return (
                    <li key={item.productId}>
                        <span className="font-semibold">{product?.name} - Quantidade:</span> {item.quantity} - Subtotal: R${(product?.price * item.quantity || 0).toFixed(2)}
                        <button className="ml-2 bg-sky-200 p-1 rounded-xl lowercase hover:bg-sky-100 font-semibold" onClick={() => handleRemoveProduct(item.productId)}>Remover</button>
                    </li>
                    );
                })}
                </ul>
            </div>
            <div>
                <div className="font-semibold text-center m-2">
                    <h3>Selecionar Cliente</h3>
                </div>
                <select
                    className="w-full rounded-xl lowercase bg-sky-50 hover:bg-sky-200 p-1 m-1"
                    onChange={(e) => setSelectedCustomer(Number(e.target.value))}
                    value={selectedCustomer || ''}
                >
                    <option value="">Selecione um cliente</option>
                    {customers.map((customer) => (
                    <option key={customer.id} value={customer.id}>
                        {customer.name}
                    </option>
                    ))}
                </select>
            </div>
            <div>
                <div className="font-semibold text-center m-2">
                    <h3>Selecionar Método de Pagamento</h3>
                </div>
                <select 
                    className="w-full rounded-xl lowercase bg-sky-50 hover:bg-sky-200 p-1 m-1"
                    onChange={(e) => setPaymentMethod(e.target.value)} value={paymentMethod}>
                <option value="cash">Dinheiro</option>
                <option value="credit">Cartão de Crédito</option>
                <option value="debit">Cartão de Débito</option>
                </select>
            </div>
            <div>
                <h3 className="font-semibold">Total: R${totalAmount.toFixed(2)}</h3>
                <button className=" bg-sky-200 p-2 w-full m-2 rounded-xl lowercase hover:bg-sky-100 font-semibold" onClick={handleCheckout}>Finalizar Compra</button>
            </div>
        </ScrollArea>
        </div>
      );
}