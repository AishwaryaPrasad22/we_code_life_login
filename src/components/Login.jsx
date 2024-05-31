import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-box">
      <h2 className="heading text-left mb-4">Log In</h2>
      <form>
        <div className="form-group mb-3"> 
          <input type="email" className="form-control" id="email" placeholder="E-mail" />
        </div>
        <div className="form-group mb-3">
          <input type="password" className="form-control" id="password" placeholder="Password" />
          <a href="#" className="forgot-password">Forgot your password?</a>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Log In</button>
      </form>
      <div className="signup text-center mt-3">
      <p>Don't have an account? <a href="#" class="signup-link">Sign up</a></p>
      </div>

    </div>
  );
}

export default Login;
