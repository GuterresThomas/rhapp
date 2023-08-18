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
        <div className="flex justify-center mt-20">
            <div>
                <form onSubmit={handleForm} className="p-5 bg-sky-100 rounded-xl gap-2 flex flex-col justify-center">
                    <label className="font-sans-Roboto font-semibold bg-sky-100" htmlFor="email"><p className="bg-sky-100">Email</p></label>
                        <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" className="rounded-xl w-full hover:bg-sky-100 bg-sky-50 p-2" />
                    
                    <label htmlFor="confirmEmail"  className="font-sans-Roboto font-semibold bg-sky-100"><p className="bg-sky-100">Confirm Email</p></label>
                         <input onChange={(e) => setConfirmEmail(e.target.value)} required type="email" name="confirmEmail" id="confirmEmail" placeholder="example@mail.com" className="hover:bg-sky-100 rounded-xl w-full bg-sky-50 p-2" /> 
                     
                    <label htmlFor="password" className="font-sans-Roboto bg-sky-100 mt-2 font-semibold"><p className="bg-sky-100">Password</p></label>
                        <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" className="hover:bg-sky-100 rounded-xl w-full bg-sky-50 p-2"/>
                    <br/>
                    <button type="submit" className="bg-sky-50 rounded-xl mt-2 w-full font-sans-Roboto font-bold p-2 hover:bg-sky-100">Cadastar</button>
                </form>
            </div>
        </div>
    );
}

export default Page;