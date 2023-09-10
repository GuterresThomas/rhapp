'use client'
import React, { useState } from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from 'next/navigation'
import { User } from "firebase/auth";
import Link from "next/link"
import LoginForm from "@/components/loginForm"


function Page() {
    return (
        <LoginForm />
    )
}

export default Page;