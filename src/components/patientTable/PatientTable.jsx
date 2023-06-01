import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {TrashSimple} from '@phosphor-icons/react'
import axios from 'axios';


const PatientTable = (props) => {
  const [patients, setPatients] = useState([]);
  const patientImage = require('../../assests/patient.png');
  var logo = require('../../assests/logo.png');
  useEffect(() => {
    // Fetch patient data from the API and update the state
    fetchPatients();
  }, []);


  const fetchPatients = async () => {
    try {
      // Make an API call to fetch patient data
      const response = await fetch('http://localhost:5000/api/patient/'+props.doctor._id);
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.error('Error fetching patient data:', error);
    }
  };

  const handleDelete=async(id)=>{
    try {
      // Make an API call to fetch patient data
      axios.delete('http://localhost:5000/api/patient/'+props.doctor._id+'/'+id).then((response)=>{
        console.log(response.data);
      })
      const response = await fetch('http://localhost:5000/api/patient/'+props.doctor._id);
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.error('Error fetching patient data:', error);
    }
  }


  return (
    <div>
      <table className='m-5 p-2'>
        <thead className='p-2 mb-2'>
          <tr>
            <th className='p-3'>Photo</th>
            <th className='p-3'>Full Name</th>
            <th className='p-3'>Age</th>
            <th className='p-3'>Medical Condition</th>
            <th className='p-3'>Last Visit</th>
          </tr>
        </thead>
        <tbody className='m-2'>
          {patients.map(patient => (
            <tr key={patient.id} className='shadow' style={{borderRadius:"2rem"}}>
              <td className='p-4 '><img src={patientImage} alt="" className='' style={{width:"2rem"}}/></td>
              <td className='p-4 '>{patient.name}</td>
              <td className='p-4 '>{patient.age}</td>
              <td className='p-4 '>{patient.symptoms}</td>
              <td className='p-4 '>{patient.lastVisit}</td>
              <td className='p-4 'style={{cursor:"pointer"}} onClick={(key)=>handleDelete(key)}><TrashSimple size={20} color="#cc1414" weight="fill" /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className=''>
        <Link to={`/patientDetails/${props.doctor._id}`} state={props.doctor}>
        <button className='btn btn-danger fw-bold' >Add New Patient</button>
        </Link>
      </div>
    </div>
  );
};

export default PatientTable;