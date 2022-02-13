import { useState } from "react";
import initializeFirebase from "../Pages/Firebase/Firebase.init"
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import axios from "axios";

initializeFirebase();


const useFirebase=()=>{
    const [user, setUser]= useState({})
const [isLoading, setisLoading]=useState(true);
const [AuthError, setAuthError]=useState('')
const [admin, setAdmin]= useState(false);
    const auth = getAuth();

const registerUser=(name, email, password,location,history)=>{
  setisLoading(true)
    createUserWithEmailAndPassword(auth, name, email, password,)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        saveUser(user)
        const destination = location?.state?.from || '/';
        history.replace(destination); 
        setAuthError('') ;
        // ...
      })
      .catch((error) => {
        
        setAuthError(error.message) ;
        // ..
      })
      .finally(()=>{setisLoading(false)})
}
const loginUser=(email, password, location, history)=>{
  setisLoading(true)
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const destination = location?.state?.from || '/';
    history.replace(destination); 
    setAuthError('') ;
    // ...
  })
  .catch((error) => {
   
    setAuthError(error.message) ;
  })
  .finally(()=>{setisLoading(false)});
}

useEffect(()=>{
  setisLoading(true)
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } else {
         setUser({})
        }
        setisLoading(false)

      });
},[auth])
useEffect(()=>{
  fetch(`http://localhost:5000/users/${user.email}`)
  .then(res=>res.json())
  .then(data=> setAdmin(data.admin))
}, [user.email])

const logoutUser=()=>{
  setisLoading(true)
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
      .finally(()=>{setisLoading(false)});
}

const saveUser=(data)=>{
  
  axios.post('http://localhost:5000/users', data)
  .then(res=>{
    
    if(res.data.insertedId){
        alert('User Added successfully')
        
    }
    
})
}

return{
    user,
    admin,
    AuthError,
    isLoading,
    registerUser,
    loginUser,
    logoutUser
}
}
export default useFirebase;