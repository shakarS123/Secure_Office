import React from 'react';
import './App.css';
import Register from './Component/Register';
import Loginform from './Component/Loginform'
//import image from "./image/"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
     
      <Register/>
      <Loginform />
    </div>
  );
}

export default App;
