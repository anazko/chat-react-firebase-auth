import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navbar, Nav, Container } from "react-bootstrap"
import { Context } from "../index"

const Header = () => {

  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <Navbar bg="dark" variant="dark" className="justify-content-between">
      <Container>
        <Navbar.Brand href="#home">
          React chat
        </Navbar.Brand>
        <Nav className="justify-content-end" activeKey="/home">
          { 
          user ? 
            <Nav.Item>
              <Nav.Link onClick={ () => { auth.signOut() } }>Exit</Nav.Link>
            </Nav.Item>
          :
            <Nav.Item>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </Nav.Item>
          }
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header