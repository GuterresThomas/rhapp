'use client'
import { useState, useEffect } from "react";

export default function BulletinBoard() {
    const [bulletin, setBulletin] = useState([])
    const [newBulletin, setNewBulletin] = useState({
        title:'',
        body:'',
    })

    const fetchBulletins =async () => {
        const response = await fetch('http://localhost:3000/bulletin_boards')
        const data = await response.json()
        setBulletin(data)
    }

    const addBulletin =async () => {
        const response = await fetch('http://localhost:3000/bulletin_boards',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBulletin),
        })
        if(response.status === 201) {
            setNewBulletin({
                title: '',
                body: '',
            })
            fetchBulletins()
        }
    }

    const deleteBulletin =async (id) => {
        const response = await fetch(`http://localhost:3000/employees/${id}`, {
            method: 'DELETE'
        });
        if(response.status === 204 ){
            fetchBulletins()
            alert('Aviso excluido com sucesso!')
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addBulletin()
        alert('Avido adicionado com sucesso!')
        window.location.reload()
    }

    useEffect(() => {
        fetchBulletins()
    }, [])
    
}

