import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Component/Register';
import Loginform from './Component/Loginform'
//import image from "./image/"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
     
      <Register/>
      <Loginform />
    </div>
  );
}

export default App;
