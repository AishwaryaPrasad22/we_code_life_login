import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Pictures from './components/Pictures';
import Login from './components/Login';

function App() {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100 bg-red">
      <div className="row w-100">
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center order-1 order-md-1">
          <Pictures />
        </div>
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center order-2 order-md-2">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default App;
