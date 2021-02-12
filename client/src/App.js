import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Navigation from './components/views/NavBar/NavBar'
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import Auth from './hoc/auth'

function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  )
}

export default App
