import React, { createContext } from 'react'
import firebaseInit from '../Firebase/firebase.init';
import useFirebase from '../Hooks/useFirebase';

firebaseInit();

const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    )
}
export { AuthProvider, AuthContext };