import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Pictures from './components/Pictures';
import Login from './components/Login';

function App() {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100 bg-red">
      <div className="row w-100">
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
          <Pictures />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default App;
