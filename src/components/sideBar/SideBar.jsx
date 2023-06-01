import React from 'react'
import { useNavigate } from 'react-router-dom';

const SideBar = (props) => {
    var logo = require('../../assests/logo.png');
    const navigate=useNavigate();
    // var profile = require('../../assests/DoctorsProfile.png');
    const handleLogout=()=>{
        navigate('/');
    }
  return (
    <div className='position-sticky'>
      <div className='d-flex flex-column' style={{height:"100vh",backgroundColor:"pink"}}>
        <div className='d-flex align-items-center my-5 flex-column flex-lg-row justify-content-center mx-5'>
        <div>
        <img src={logo} alt="" style={{width:"100%"}}/>
        </div>
        <div>
        <h1 className='text-danger fw-bolder fs-1 fs-md-6'>CareNet</h1>
        </div>
        </div>
        <div className='mt-3'>
        <img src="https://firebasestorage.googleapis.com/v0/b/fir-project-ad7c8.appspot.com/o/DoctorsProfile.png?alt=media&token=62eb0bb9-c9f1-412e-8b4b-6ce1b7c53efd" alt="" style={{width:"10rem"}}/>
        <h1 className='text-danger fw-bolder' style={{fontSize:"2.5rem"}}>Dr. {props.name}</h1>
        <h1 className='text-danger fw-bolder' style={{fontSize:"1.5rem"}}>{props.designation}</h1>
        <h1 className='text-danger fw-bolder' style={{fontSize:"1.5rem"}}>{props.qualification}</h1>
        
        </div>
        <div className='d-flex justify-content-center btn mt-4'>
        <button className='rounded p-2 fs-5 border-0 text-danger fw-bold shadow' style={{width:"50%",backgroundColor:""}} onClick={handleLogout}>LogOut</button>
        </div>
      </div>
    </div>
  )
}

export default SideBar