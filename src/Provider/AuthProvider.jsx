/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
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

    const provider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth,provider)
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
        createUser,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;