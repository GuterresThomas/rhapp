'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"
import { isTokenValid, setToken } from '@/components/auth/auth'
import jwt from 'jsonwebtoken';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        // Login bem-sucedido, você pode redirecionar o usuário ou fazer qualquer ação apropriada aqui.
        const data = await response.json();
        setToken(data.token);
        console.log('token definido:', data.token) // Defina o token no armazenamento local
        router.push("/userPage");
      } else {
        const data = await response.json();
        alert(data.error || "Ocorreu um erro durante o login.");
      }
    } catch (error) {
      console.error("Erro durante o login:", error);
      alert("Ocorreu um erro durante o login.");
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <div>
        <form
          onSubmit={handleForm}
          className="p-5 bg-sky-100 rounded-xl gap-2 flex flex-col justify-center"
        >
          <label className="font-sans-Roboto font-semibold bg-sky-100" htmlFor="email">
            <p className="bg-sky-100">Email</p>
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            name="email"
            id="email"
            placeholder="example@mail.com"
            className="rounded-xl w-full hover:bg-sky-100 bg-sky-50 p-2"
          />

          <label htmlFor="password" className="font-sans-Roboto bg-sky-100 mt-2 font-semibold">
            <p className="bg-sky-100">Password</p>
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="hover-bg-sky-100 rounded-xl w-full bg-sky-50 p-2"
          />
          <br />
          <button
            type="submit"
            className="bg-sky-50 rounded-xl mt-2 w-full font-sans-Roboto font-bold p-2 hover:bg-sky-100"
          >
            Login
          </button>
          <div>
            <Link href="/registerPage"><span className="text-sm font-semibold">Não tem uma conta ainda? Cadastre-se aqui!</span></Link>
          </div>
        </form>
      </div>
    </div>
  );
}
