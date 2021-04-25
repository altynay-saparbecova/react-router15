import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import { About } from './components/About'
import { Contacts } from './components/Contacts'
import { Employees } from './components/Employees'
import { Home } from './components/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/employees" component={Employees} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default App