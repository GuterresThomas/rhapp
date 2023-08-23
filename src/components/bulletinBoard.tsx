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
        alert('Aviso adicionado com sucesso!')
        window.location.reload()
    }

    useEffect(() => {
        fetchBulletins()
    }, [])
    
    
    return(
        <div className="w-3/4 p-3">
            <ScrollArea className="h-[300px]">
                <div className="m-5">
                    <div className="text-center">
                        <h1 className="font-bold text-2xl">Notas de aviso:</h1>
                    </div>
                    <ul>
                    {bulletins.map((bulletin) => (
                                <li key={bulletins.id} className=" border-2 m-2 border-sky-50 p-4 rounded-xl shadow-sm ">
                                    <h3 className="font-bold">{bulletin.title}</h3>
                                    <p>{bulletin.body}</p>
                                    <div className="flex justify-center">
                                    <button 
                                        className="bg-sky-50 p-3 font-bold rounded-xl w-full hover:bg-sky-200 m-2" 
                                        onClick={() => deleteBulletin(bulletin.id)}>
                                            Excluir
                                        </button>
                                    </div>
                                </li>
                                ))}
                    </ul>
                </div>
            </ScrollArea>
            <div>
                <form onSubmit={handleSubmit} className="flex-col flex justify-center gap-2 p-2 ">
                    <label className="font-bold" htmlFor="title">Titulo:</label>
                    <input className="bg-sky-50 font-semibold rounded-xl p-1 w-full hover:bg-sky-200"
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Título"
                        value={newBulletin.title}
                        onChange={(e) => setNewBulletin({ ...newBulletin, title: e.target.value })} />
                    <label className="font-bold" htmlFor="body">Texto:</label>    
                    <input className="bg-sky-50 font-semibold rounded-xl p-1 w-full hover:bg-sky-200"
                        type="text"
                        id="body"
                        placeholder="Texto"
                        name="body"
                        value={newBulletin.body}
                        onChange={(e) => setNewBulletin({ ...newBulletin, body: e.target.value })} />
                        
                    <button type="submit" className="bg-sky-50 p-3 font-bold rounded-xl hover:bg-sky-200 m-2">Adicionar Nota</button>
                </form>
            </div>
        </div>
    )
}

