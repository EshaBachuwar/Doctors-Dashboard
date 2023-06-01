import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ showSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  var logo = require('../../assests/logo.png');
  const navigate=useNavigate();

  const handleLogin = () => {
    axios
      .post('http://localhost:5000/api/auth/login', { email, password })
      .then((response) => {
        console.log(response.data);
        navigate('/dashboard/'+response.data.doctor._id);

      })
      .catch((error) => {
        setLoginError(true);
        console.error(error);
      });
  };

  return (
    <div className='d-flex justify-content-center align-items-center ' style={{width:"100vw",height:"100vh"}}>
      <div className='d-flex flex-column justify-content-center' style={{height:"100vh",flex:1,backgroundColor:"pink"}}>
        <img src={logo} alt="" />
        <h1 className='text-danger fw-bolder' style={{fontSize:"4rem"}}>CareNet</h1>
      </div>
      <div  className='d-flex justify-content-center ' style={{backgroundColor:"transparent",flex:3}}>
        <div className='p-5 shadow-lg' style={{width:"50%",borderRadius:"3rem"}}>
      <h1 className='text-danger fw-bolder'>Login</h1>
      <div className='d-flex flex-column gap-2 mt-4'>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='rounded border-0 border-bottom p-2 '
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='rounded border-0 border-bottom p-2 '
      />
      {loginError && <p style={{ color: 'red' }} className='fw-bold'>Incorrect email or password</p>}
      <button onClick={handleLogin} className='btn btn-danger fs-5 rounded border-0 fw-bold'>Log In</button>
      <p>
        Don't have an account? <Link to="/register" onClick={showSignup} className='text-primary fw-bold' style={{textDecoration:"none"}}>Sign Up</Link>
      </p>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Login;



// Rest of the code remains the same
