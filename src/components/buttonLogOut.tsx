
import React from "react";
import { getAuth, signOut } from "firebase/auth";

const ButtonLogOut = () => {
    const handleButtonClick = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            window.location.replace('/');
        }).catch((error) => {
            console.log(error)
        });
    }
    return (
        <button  onClick={handleButtonClick}>Sair</button>
    )
}

export default ButtonLogOut