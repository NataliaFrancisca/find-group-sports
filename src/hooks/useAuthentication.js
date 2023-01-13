import { auth } from "../firebase/firebase-config";

import { 
    createUserWithEmailAndPassword, 
    signOut, 
    signInWithEmailAndPassword,
    updateProfile
 } from "firebase/auth";

import { useState, useEffect } from "react"

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const createUser = async(data) => {

        try{
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );

            await updateProfile(user, {
                displayName: data.name
            });

            return user;
        }catch(error){
            console.log(error.message);

        }
    }

    const logout = () => {
        signOut(auth);
    }

    const login = async(data) => {
        try{
            await signInWithEmailAndPassword(auth, data.email, data.password);
        }catch(error){
            console.log(error.message);
        }
    }

    return {
        auth,
        createUser,
        error,
        logout,
        login
    }


}