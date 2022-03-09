
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './Footer';
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
      <Route path="/checkout">
        <Checkout/>
      </Route>
      <Route path="/">
      <Header/>
        <Home/>
        <Footer/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
