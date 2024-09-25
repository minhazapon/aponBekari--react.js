import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const fireContext = createContext(null)

       const gleP = new GoogleAuthProvider(null)

const AuthContext = ({children}) => {

    const [users, setUsers] = useState(null)

    const [loading, setLoading] = useState(true)


    const createUser = (email, password) =>{
     
             setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email, password) =>{
            setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
        
    }

    const google = () =>{
        setLoading(true)
      return signInWithPopup(auth, gleP)

    }

    const logOut = () =>{
        setLoading(true)
      signOut(auth)

    }

    useEffect( ()=> {
        const unSubscribe = onAuthStateChanged( auth, currentUser => {    

            setUsers(currentUser)
            console.log(currentUser)
            setLoading(false)
           
        } )
        return () =>{
            unSubscribe()
        }
    } , [])

    

    const authInfo = {users, createUser, signIn, google, logOut, loading }

    return (
        <div>

            <fireContext.Provider value={authInfo} >
                {children}
            </fireContext.Provider>
            
        </div>
    );
};

export default AuthContext;