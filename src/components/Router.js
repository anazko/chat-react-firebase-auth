import { useContext } from "react"
import { Switch, Route, Redirect } from "react-router"
import { useAuthState } from 'react-firebase-hooks/auth'
import Login from "./Login"
import Chat from "./Chat"
import { Context } from "../index"

const Router = () => {
  const { auth } = useContext(Context);
  const [ user ] = useAuthState(auth);

  // console.log(user)

  return user ? 
    (
      <Switch>
        <Route path="/chat" exact={true} >
          <Chat />
        </Route>
        <Redirect to="/chat" />
      </Switch>
    )
  :
    (
      <Switch>
        <Route path="/login" exact={true} >
          <Login />
        </Route>
        <Redirect to="/login" />
      </Switch>
    )
}

export default Router