import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import LoginPage from '../LoginPage/LoginPage'
import RegisterPage from '../RegisterPage/RegisterPage'
import Auth from '../../../hoc/auth'
import navImage from '../../../resource/images/nav_image.png'
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <img
          alt=""
          src={navImage}
          width="30"
          height="30"
          className="d-inline-block align-top"
          style={{ margin: 5 }}
        />
        <Navbar.Brand href="#home">Haesim's</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Auth(LoginPage, false)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route
              exact
              path="/register"
              component={Auth(RegisterPage, false)}
            />
            <Route exact path="/landing" component={Auth(LandingPage, true)} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default NavBar
