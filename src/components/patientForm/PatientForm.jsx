import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const PatientForm = (props) => {
    const [patientForm,setPatientForm] =useState({
        name:'',
        age:'',	
        gender:'',
        phone:'',
        address:'',	
        city:'',	
        state:'',
        email:'',
        symptoms:'',
        currentlyOnAnyMedication:false,	
        hasDiabetesLiverProblems:false,
        hasHeartDisease:false,
        medicalPrescribed:'',
    })
    const navigate=useNavigate();

    const handleDiabetes=(e)=>{
        setPatientForm({...patientForm,hasDiabetesLiverProblems:!patientForm.hasDiabetesLiverProblems})
    }
    const handleHeart=(e)=>{
        setPatientForm({...patientForm,hasHeartDisease:!patientForm.hasHeartDisease})
    }
    const handleMedical=(e)=>{
        setPatientForm({...patientForm,currentlyOnAnyMedication:!patientForm.currentlyOnAnyMedication})
    }

    const handleAddPatient=()=>{
        console.log(patientForm)
        axios.post('http://localhost:5000/api/patient/'+props.doctor._id,patientForm).then((response)=>{
            console.log(response.data)
            navigate('/dashboard/'+props.doctor._id)
        }
        )
    }

  return (
    <div className='my-3' style={{width:"55%"}}>
        <div style={{width:"100%"}}>
            <h1 className='text-danger fw-bolder'>Patient Form</h1>
            <div
            className="d-flex flex-column gap-4 mt-4 border rounded-3 shadow p-5"
            style={{ width: '100%' }}
          >
            <input
              type="text"
              placeholder="Name"
              value={patientForm.name}
              onChange={(e) => setPatientForm({...patientForm,name:e.target.value})}
              className="rounded border-0 border-bottom p-2 "
            />
            <input
              type="number"
              placeholder="Age"
              value={patientForm.age}
              onChange={(e) => setPatientForm({...patientForm,age:e.target.value})}
              className="rounded border-0 border-bottom p-2 "
            />
            <select
              value={patientForm.gender}
              onChange={(e) => setPatientForm({...patientForm,gender:e.target.value})}
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
              value={patientForm.phone}
              onChange={(e) => setPatientForm({...patientForm,phone:e.target.value})}
              className="rounded border-0 border-bottom p-2 "
            />
            <input
              type="text"
              placeholder="Address"
              value={patientForm.address}
              onChange={(e) => setPatientForm({...patientForm,address:e.target.value})}
              className="rounded border-0 border-bottom p-2 "
            />
            <input
              type="text"
              placeholder="City"
              value={patientForm.city}
              onChange={(e) => setPatientForm({...patientForm,city:e.target.value})}
              className="rounded border-0 border-bottom p-2 "
            />
            <input
              type="text"
              placeholder="State"
              value={patientForm.state}
              onChange={(e) => setPatientForm({...patientForm,state:e.target.value})}
              className="rounded border-0 border-bottom p-2 "
            />
            <input
              type="email"
              placeholder="Email"
              value={patientForm.email }
              onChange={(e) => setPatientForm({...patientForm,email:e.target.value})}
              className="rounded border-0 border-bottom p-2 "
            />
            <select
              value={patientForm.symptoms}
              onChange={(e) => setPatientForm({...patientForm,symptoms:e.target.value})}
              className="rounded border-0 border-bottom p-2 "
            >
              <option value="">Select Symptoms</option>
              <option value="depression">Depression</option>
              <option value="anxiety">Anxiety</option>
              <option value="substanceAbuseDisorder">Substance abuse disorder</option>
            </select>
            <div className='d-flex gap-3'>
            <input
            type="checkbox"
            checked={patientForm.hasDiabetesLiverProblems}
            value={patientForm.hasDiabetesLiverProblems}
            onChange={handleDiabetes}
            />
            <label>Has Diabetes or Liver Problems</label>
            </div>
            <div className='d-flex gap-3'>
            <input
            type="checkbox"
            checked={patientForm.hasHeartDisease}
            value={patientForm.hasHeartDisease}
            onChange={handleHeart}
            />
            <label>Has Heart Disease</label>
          </div>
          <div className='d-flex gap-3'>
            <input
            type="checkbox"
            checked={patientForm.currentlyOnAnyMedication}
            value={patientForm.currentlyOnAnyMedication}
            onChange={handleMedical}
            />
            <label>Currently on Medical Prescription</label>
          </div>
            <textarea
              type="text"
              placeholder="Prescribed Medication"
              value={patientForm.medicalPrescribed }
              onChange={(e) => setPatientForm({...patientForm,medicalPrescribed:e.target.value})}
              className="rounded border-0 border-bottom p-2 "
            />
          <button className='btn btn-danger rounded shadow' onClick={handleAddPatient}>Add Patient</button>
            </div>
        </div>
    </div>
  )
}

export default PatientForm