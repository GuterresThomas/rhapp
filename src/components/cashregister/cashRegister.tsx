'use client'
import { useState, useEffect } from "react";

interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  interface Customer {
    id: number;
    name: string;
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
      const handleCheckout = () => {
        // Implemente a lógica para processar o pagamento, enviar os detalhes para a API, etc.
        console.log('Pagamento processado:', {
          selectedProducts,
          selectedCustomer,
          paymentMethod,
          totalAmount,
        });
      };
    
      return (
        <div>
          <h2>Caixa</h2>
          <div>
            <h3>Selecionar Produtos</h3>
            <ul>
                {availableProducts.map((product) => (
                <li key={product.id}>
                    {product.name} - R${typeof product.price === 'number' ? product.price.toFixed(2) : 'Preço indisponível'}
                    <button onClick={() => handleProductSelect(product.id)}>Adicionar</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Produtos Selecionados</h3>
            <ul>
              {selectedProducts.map((item) => {
                const product = availableProducts.find((p) => p.id === item.productId);
                return (
                  <li key={item.productId}>
                    {product?.name} - Quantidade: {item.quantity} - Subtotal: R${(product?.price * item.quantity || 0).toFixed(2)}
                    <button onClick={() => handleRemoveProduct(item.productId)}>Remover</button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3>Selecionar Cliente</h3>
            <select
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
            <h3>Selecionar Método de Pagamento</h3>
            <select onChange={(e) => setPaymentMethod(e.target.value)} value={paymentMethod}>
              <option value="cash">Dinheiro</option>
              <option value="credit">Cartão de Crédito</option>
              <option value="debit">Cartão de Débito</option>
            </select>
          </div>
          <div>
            <h3>Total: R${totalAmount.toFixed(2)}</h3>
            <button onClick={handleCheckout}>Finalizar Compra</button>
          </div>
        </div>
      );
}