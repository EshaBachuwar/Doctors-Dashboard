import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [signupError, setSignupError] = useState('');
  const [formData,setFormData]=useState({
    name:'',
    age:'',
    gender:'',
    phone:'',
    email:'',
    password:'',
    confirmPassword:'',
  })
  var logo = require('../../assests/logo.png');

  const handleSignup = (e) => {
    // Perform signup logic
    e.preventDefault();
    if (formData.password !==formData.confirmPassword) {
      setSignupError('Passwords do not match');
      return;
    }

    axios
      .post('http://localhost:5000/api/auth/register', {
        formData
      })
      .then((response) => {
        console.log(response.data);
        navigate('/dashboard/'+response.data._id);
      })
      .catch((error) => {
        setSignupError(error.response.data.message);
        console.error(error);
      });
      
     
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{ width: '100vw', height: '100vh' }}
    >
     <div className='d-flex flex-column justify-content-center' style={{height:"100vh",flex:1,backgroundColor:"pink"}}>
        <img src={logo} alt="" />
        <h1 className='text-danger fw-bolder' style={{fontSize:"4rem"}}>CareNet</h1>
      </div>
        <div
          className="d-flex justify-content-center flex-column align-items-center"
          style={{
           flex:3,
            borderRadius: '3rem',
            width: '50%',
          }}
        > <div className='p-5 shadow-lg d-flex justify-content-center flex-column align-items-center' style={{width:"50%",borderRadius:"3rem"}}>
          <h1 >Register</h1>
          <div
            className="d-flex flex-column gap-3 mt-4"
            style={{ width: '60%' }}
          >
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData,name:e.target.value})}
              className="rounded border-0 border-bottom p-2 "
            />
            <input
              type="number"
              placeholder="Age"
              value={formData.age}
              onChange={(e) => setFormData({...formData,age:e.target.value})}
              className="rounded border-0 border-bottom p-2 "
            />
            <select
              value={formData.gender}
              onChange={(e) => setFormData({...formData,gender:e.target.value})}
              className="rounded border-0 border-bottom p-2 "
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>
            </select>
            <input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => setFormData({...formData,phone:e.target.value})}
              className="rounded border-0 border-bottom p-2 "
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email }
              onChange={(e) => setFormData({...formData,email:e.target.value})}
              className="rounded border-0 border-bottom p-2 "
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({...formData,password:e.target.value})}
              className="rounded border-0 border-bottom p-2 "
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData,confirmPassword:e.target.value})}
              className="rounded border-0 border-bottom p-2 "
            />
            {signupError && <p className="text-danger">{signupError}</p>}
            <button
              onClick={handleSignup}
              className="btn btn-primary fs-5 rounded border-0"
            >
              Register
            </button>
          </div>
          </div>
        </div>
    </div>
  );
};

export default Register;
