'use client'
import React, { useState } from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from 'next/navigation'
import { User } from "firebase/auth";
import Link from "next/link"
import { useAuthContext } from '@/context/AuthContext'

function Page() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();
    const { user } = useAuthContext();

    const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { result, error } = await signIn(email, password);

        if (error) {
            alert(error);
            return router.push("/");
            console.log(error)
        }

        // Assuming the user is inserted into the context automatically by the signIn function
        else {
            console.log('User is authenticated:', user);
            return router.push("/userPage");
        }
    }


    return (
        <div className="flex justify-center mt-20 ">
            <div className="">
                <form onSubmit={handleForm} className="p-5 shadow-slate-700 shadow-md mt-2 bg-sky-100 rounded-xl gap-1 flex flex-col justify-center">
                    <label className="font-sans-Roboto font-semibold m-2" htmlFor="email">
                        <p className="bg-sky-100">Email</p>
                        <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" className="bg-sky-50 hover:bg-sky-100 rounded-xl w-full p-2" />
                    </label>
                    <label className="font-sans-Roboto font-semibold m-2" htmlFor="password">
                        <p className="bg-sky-100">Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" className="bg-sky-50 hover:bg-sky-100 rounded-xl w-full p-2" />
                    </label>
                    <br />
                    <button type="submit" className="bg-sky-50 rounded-xl font-sans-Roboto font-bold p-1 hover:bg-sky-200">Login</button>
                    <div>
                      <Link href="/registerPage"><span className="text-sm font-semibold">Não tem uma conta ainda? Cadastre-se aqui!</span></Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Page;