'use client'
import React from 'react';
import {
    onAuthStateChanged,
    getAuth,
    User,
} from 'firebase/auth';
import firebase_app from '@/firebase/config';
const auth = getAuth(firebase_app);

interface CustomUser extends User {
    isAdmin: boolean;
    isUser: boolean;
}

interface AuthContextType {
    user: CustomUser | null;
}

export const AuthContext = React.createContext<AuthContextType>({ user: null });

export const useAuthContext = () => React.useContext(AuthContext);

interface AuthContextProviderProps {
    children: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [user, setUser] = React.useState<CustomUser | null>(null);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            console.log('Auth state changed:', authUser);
            if (authUser) {
                // Create a new CustomUser object with the necessary properties
                const customUser: CustomUser = {
                    ...authUser,
                    isAdmin: authUser.email === 'admin@admin.com',
                    isUser: authUser.email !== 'admin@admin.com' && authUser.email !== null,
                };
                console.log('Custom user:', customUser); 
                setUser(customUser);
            } else {
                setUser(null);
            }
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
