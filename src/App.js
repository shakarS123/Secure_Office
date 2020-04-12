import React from 'react';
import './App.css';
import Register from './Component/Register';
import Loginform from './Component/Loginform'
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
//import image from "./image/"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Component/Navbar';
//import Console_test from "./Component/Console_test"

function App() {
  return (
    <Router>

      <div className="App">
        {/* <test/> */}
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/log-in"}>Secureoffice.in</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/log-in"}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <Navbar />  */}
        <div className="auth-wrapper">
        <div className="auth-inner">
        <Switch>
        <Route exact path="/" component={Loginform} />
        <Route path="/sign-up" component={Register} />
        {/* <Register/> */}
        <Route path="/log-in" component={Loginform} />
        {/* <Loginform /> */}
        </Switch>
        </div>
        </div>
      </div>
    </Router>

  );
}

export default App;
