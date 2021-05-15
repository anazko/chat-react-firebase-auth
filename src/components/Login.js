import firebase from "firebase/app";
import { useContext } from "react";
import {Context } from "../index"


const Login = () => {

  const {auth} = useContext(Context)

  const login = async () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    const {user} = await auth.signInWithPopup(provider)
    // console.log(user)
  }

  return (
    <button onClick={login}>Login</button>
  )
}

export default Login