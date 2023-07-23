/* eslint-disable react/prop-types */
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
const auth = getAuth(app)
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState("");
    const [loading,setLoading] = useState(true);
    console.log(user);
    const createUser = (email,password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const singIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const resetPass = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth,email);
    }

    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const facebookProvider = new FacebookAuthProvider();
    const facebookSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth,facebookProvider);
    }

    const logOut = () => {
        setLoading(false)
        return signOut(auth)
    }
    useEffect(() => {
       const unSubscribe =  onAuthStateChanged(auth, (loggedUser)=> {
        setUser(loggedUser);
        setLoading(false)
       })
       return () => {
        unSubscribe();
    };
    },[])
    const authInfo = {
        user,
        logOut,
        singIn,
        loading,
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