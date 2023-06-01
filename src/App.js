import './App.css';
import Login from './pages/login/Login';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Register from './pages/register/Register';
import DoctorDashboard from './pages/dashboard/Dashboard';
import PatientDetails from './pages/patientDetails/PatientDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard/:id' element={<DoctorDashboard />} />
          <Route path='/patientDetails/:doctorId' element={<PatientDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
