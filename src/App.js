import { BrowserRouter } from "react-router-dom"
import { Context } from "./index"
import Header from "./components/Header"
import Router from "./components/Router"
import Loader from "./components/Loader"


import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useContext } from "react"
import { useAuthState } from "react-firebase-hooks/auth"

function App() {

  const {auth} = useContext(Context)
  const [user, loading] = useAuthState(auth)

  if (loading) return <Loader />

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
