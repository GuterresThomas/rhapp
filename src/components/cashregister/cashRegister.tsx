'use clien'
import { useState, useEffect } from "react";


export default function CashRegister() {
    const [selectedProduct, setSelectedProduct] = useState([])
    const [selectedCustomer, setSelectedCustomer] = useState([])
    const [paymenteMethod, setPaymenteMethod] = useState('')
    const [totalAmout, setTotalAmout] = useState(0)

    const fetchProducts =async () => {
        const response = await fetch('')
        const data = await response.json()
        setSelectedProduct(data)
    }

}