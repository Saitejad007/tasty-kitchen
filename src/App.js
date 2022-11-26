import './App.css'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'

// const sortByOptions = [
//   {
//     id: 0,
//     displayText: 'Highest',
//     value: 'Highest',
//   },
//   {
//     id: 2,
//     displayText: 'Lowest',
//     value: 'Lowest',
//   },
// ]

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  </div>
)

export default App
