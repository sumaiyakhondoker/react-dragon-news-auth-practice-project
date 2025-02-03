import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
const auth = getAuth(app)
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const registerUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

const loginUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const googleLogin = () =>{
   return signInWithPopup(auth, googleProvider)
}

const githubLogin = () =>{
    return signInWithPopup(auth, githubProvider)
}
const logOut = () =>{
    setLoading(true)
    return signOut(auth)
}


useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        setLoading(false)
        console.log('current user in the auth state change',currentUser);
    })
    return ()=>{
        unsubscribe()
    }
},[])


    const authInfo = {
        user,
        registerUser,
        loginUser,
        googleLogin,
        githubLogin,
        logOut,
        loading
    
    
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;