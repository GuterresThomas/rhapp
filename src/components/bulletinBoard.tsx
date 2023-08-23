'use client'
import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"


export default function BulletinBoard() {
    const [bulletins, setBulletins] = useState([])
    const [newBulletin, setNewBulletin] = useState({
        title:'',
        body:'',
    })

    const fetchBulletins =async () => {
        const response = await fetch('http://localhost:3000/bulletin_boards')
        const data = await response.json()
        setBulletins(data)
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
        const response = await fetch(`http://localhost:3000/bulletin_boards/${id}`, {
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
    
    
    return(
        <div>
            <div>
                <ul>
                {bulletins.map((bulletin) => (
                            <li key={bulletins.id}>
                                <h3>{bulletin.title}</h3>
                                <p>{bulletin.body}</p>
                                <button onClick={() => deleteBulletin(bulletin.id)}>Delete</button>
                            </li>
                            ))}
                </ul>
            </div>
            <div>
                <form onSubmit={handleSubmit} className="flex-col flex justify-center gap-2 p-2 ">
                    <label htmlFor="title">Nota de aviso:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200"
                        type="text"
                        id="title"
                        name="title"
                        value={newBulletin.title}
                        onChange={(e) => setNewBulletin({ ...newBulletin, title: e.target.value })} />
                        
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200"
                        type="text"
                        id="body"
                        name="body"
                        value={newBulletin.body}
                        onChange={(e) => setNewBulletin({ ...newBulletin, body: e.target.value })} />
                        
                    <button type="submit" className="bg-sky-50 p-3 font-bold rounded-xl hover:bg-sky-200 m-2">Adicionar Funcionário</button>
                </form>
            </div>
        </div>
    )
}

