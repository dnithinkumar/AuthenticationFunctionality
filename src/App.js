import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/About" component={About} />
    <Route component={NotFound} />
  </Switch>
)
export default App
