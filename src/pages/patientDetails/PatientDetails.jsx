import React from 'react'
import PatientForm from '../../components/patientForm/PatientForm'
import SideBar from '../../components/sideBar/SideBar'
import { useLocation } from 'react-router-dom'

const PatientDetails = (props) => {
  const location=useLocation();
  const doctor=location.state;
  return (
    <div className='d-flex position-relative' style={{width:"100%"}}>
        <div className='position-fixed' style={{width:"25%"}}>
            <SideBar name={doctor.name} designation={doctor.designation} qualification={doctor.qualification}/>
        </div>
        <div className='d-flex justify-content-end'style={{width:"78%"}}>
            <PatientForm doctor={doctor}/>
        </div>
    </div>
  )
}

export default PatientDetails