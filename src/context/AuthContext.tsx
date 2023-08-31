'use client'
import React from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import firebase_app from '@/firebase/config';

const auth = getAuth(firebase_app);

interface AuthContextType {
    user: User | null;
}

export const AuthContext = React.createContext<AuthContextType>({ user: null });

export const useAuthContext = () => React.useContext(AuthContext);

interface AuthContextProviderProps {
    children: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [user, setUser] = React.useState<User | null>(null);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            console.log('Auth state changed:', authUser);
            setUser(authUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <div className='flex justify-center font-sans-Roboto font-semibold'>Loading...</div> : children}
        </AuthContext.Provider>
    );
};
