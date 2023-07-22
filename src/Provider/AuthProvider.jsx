/* eslint-disable react/prop-types */
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
const auth = getAuth(app)
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState("");
    console.log(user);
    const createUser = (email,password) => {
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const singIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    const resetPass = (email) => {
        return sendPasswordResetEmail(auth,email);
    }

    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth,googleProvider)
    }

    const facebookProvider = new FacebookAuthProvider();
    const facebookSignIn = () => {
        return signInWithPopup(auth,facebookProvider);
    }

    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
       const unSubscribe =  onAuthStateChanged(auth, (loggedUser)=> {
        setUser(loggedUser);
       })
       return () => {
        unSubscribe();
    };
    },[])
    const authInfo = {
        user,
        logOut,
        singIn,
        resetPass,
        createUser,
        googleSignIn,
        facebookSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;