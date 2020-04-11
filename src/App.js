import React from 'react';
import './App.css';
import Register from './Component/Register';
import Loginform from './Component/Loginform'
//import image from "./image/"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
     
     <Navbar />
      <Register/>
      <Loginform />
    </div>
  );
}

export default App;
