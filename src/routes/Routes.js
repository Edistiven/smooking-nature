import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navegation from '../components/Navigation'
import Home from '../components/Home'
import Product from '../components/Product'
import Contact from '../components/Contact'
import About from '../components/About'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/inicio" component={Navegation}></Route>
        <Route exact path="/product" component={Product}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/about" component={About}></Route>
        {/* <Route exact path="/user" component={User}></Route>  */}
        
      </Switch>
  </Router>
  );
}

export default Routes;
