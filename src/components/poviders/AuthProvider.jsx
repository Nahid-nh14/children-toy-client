/* eslint-disable react/prop-types */
import { createContext,useState, useEffect } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
// console.log(auth)
const AuthProvider = ({children}) => {
//    const  {childen} = props
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
const [userName, setUserName] = useState(null);
const [userPhoto, setUserPhoto] = useState(null)

const googleProvider = new GoogleAuthProvider()
// const gitProvider = new GithubAuthProvider()

const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}
    
    // console.log(props)
    // const [user, setUser] = useState(null);
// console.log(AuthProvider)
console.log(user, userName, userPhoto)
const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

const logOut = () => {
    return signOut(auth);
}

const googleSignIn =() => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
}

// const gitSignIn = () => {
//     // setLoading(true)
//     return signInWithPopup(auth,gitProvider)
// }

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
        console.log('logged in user inside auth state observer', loggedUser)
        setUser(loggedUser)
        setUserName(loggedUser.displayName);
        setUserPhoto(loggedUser.photoURL)
        setLoading(false);
    })

    return () => {
        unsubscribe();
    }
}, [])

const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    userName,
    userPhoto,
    googleSignIn,
    // gitSignIn
}
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;