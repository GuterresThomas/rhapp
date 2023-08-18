'use client'
import React, { useState } from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from 'next/navigation'

function Page() {
    const [email, setEmail] = useState<string>('');
    const [confirmEmail, setConfirmEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();

    const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { result, error } = await signUp(email, password);

        if (error) {
            return (
                alert((error))
            )//console.log(error);
        }

        // else successful
        console.log(result);
        return router.push("/userPage");
    }

    return (
        <div className="flex justify-center">
            <div className="">
                <h1 className="mt-20 font-sans-Roboto font-semibold text-lg ">Cadastro</h1>
                <form onSubmit={handleForm} className="p-5 rounded-md mt-2 bg-zinc-100">
                    <label className="font-sans-Roboto font-semibold m-2 bg-zinc-100" htmlFor="email">
                        <p className="bg-zinc-100">Email</p>
                        <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" className="bg-zinc-50 p-2" />
                    </label>
                    <label htmlFor="confirmEmail"  className="font-sans-Roboto font-semibold m-2 bg-zinc-100">
                         <p className="bg-zinc-100">Confirm Email</p> 
                         <input onChange={(e) => setConfirmEmail(e.target.value)} required type="email" name="confirmEmail" id="confirmEmail" placeholder="example@mail.com" className="bg-zinc-50 p-2" /> 
                    </label> 
                    <label htmlFor="password" className="font-sans-Roboto bg-zinc-100 mt-2 font-semibold">
                        <p className="bg-zinc-100">Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" className="bg-zinc-50 p-2"/>
                    </label>
                    <br></br>
                    <button type="submit" className="bg-zinc-400 rounded-md ml-14 p-2 mt-2 font-sans-Roboto font-bold hover:bg-zinc-500">Sign up</button>
                </form>
            </div>
        </div>
    );
}

export default Page;