import React, { useState } from 'react';
import PatientTable from '../../components/patientTable/PatientTable';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import SideBar from '../../components/sideBar/SideBar';
import ProfessionalDetails from '../../components/professionalDetails/ProfessionalDetails';

const DoctorDashboard = () => {
    const {id}=useParams();
    const [doctor,setDoctor]=useState({});
        axios.get('http://localhost:5000/api/user/'+id).then((response)=>{
            setDoctor(response.data);
        }   
    )
    const [showProfessionalDetails,setShowProfessionalDetails]=useState(true)
    const handleClick =()=>{
        setShowProfessionalDetails(false)
         localStorage.setItem("esha","pisha")

    }

  return (
    <>
    {showProfessionalDetails&&<div className='position-absolute shadow-lg d-flex flex-column align-items-center justify-content-center' style={{top:"5%",bottom:0,right:0,left:"30%",borderRadius: '3rem',width:"50%",zIndex:1,
            backgroundColor: '#fff',}}>
    <ProfessionalDetails id={id} />
    <a className='fs-5' onClick={handleClick} style={{cursor:"pointer",textDecoration:"none"}}>Continue</a>
    </div>}
    <div style={showProfessionalDetails===false?{zIndex:1,opacity:1}:{zIndex:-1,opacity:0.25}}>
    <div className='d-flex' style={{width:"100vw"}}>
        <div className='position-fixed' style={{width:"25%"}}>
        <SideBar name={doctor.name} designation={doctor.designation} qualification={doctor.qualification}/>
        </div>
        <div className='d-flex justify-content-end' style={{width:"85%"}}>
        <PatientTable doctor={doctor}/>
        </div>
    
    </div>
    </div> 
    </>
  );
};

export default DoctorDashboard;