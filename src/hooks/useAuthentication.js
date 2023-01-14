import { auth } from "../firebase/firebase-config";

import { 
    createUserWithEmailAndPassword, 
    signOut, 
    signInWithEmailAndPassword,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup
 } from "firebase/auth";

import { useState, useEffect } from "react"

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const provider = new GoogleAuthProvider();

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
            let systemErrorMessage;

            if(error.message.includes("Password")){
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres."
            }else if(error.message.includes("email-already")){
                systemErrorMessage = "Esse e-mail já está sendo utilizado.";
            }else{
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde"
            }

            setError(systemErrorMessage);
        }
    }

    const createUserGoogle = async() => {
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

        try{
            const result = await signInWithPopup(auth, provider)
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            const user = result.user;

            return user;
        }catch(error){
            const errorCode = error.code;
            const errorMessage = error.message;

            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);

            console.log(errorCode);
            console.log(errorMessage);
            console.log(email);
            console.log(credential);

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
        login,
        createUserGoogle
    }


}