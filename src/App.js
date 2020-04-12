import React from 'react';
import './App.css';
import Register from './Component/Register';
import Loginform from './Component/Loginform'
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
     {/* <Navbar /> */}
     <Route path="/register" component={Register} />
      {/* <Register/> */}
      <Loginform />
    </div>
    </Router>

  );
}

export default App;
