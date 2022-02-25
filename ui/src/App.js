import React from 'react'
import './App.css'

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import Patients from './pages/PatientList/Patients';
import Patient from './pages/Patient/Patient';
import NewPatient from './pages/NewPatient/NewPatient';
import Doctors from './pages/DoctorList/Doctors';
import Doctor from './pages/Doctor/Doctor'
import NewDoctor from './pages/NewDoctor/NewDoctor'
import Staffs from './pages/StaffList/Staffs'
import Staff from './pages/Staff/Staff'
import NewStaff from './pages/NewStaff/NewStaff'
import Symptoms from './pages/SymptomList/Symptoms'
import Symptom from './pages/Symptom/Symptom';
import NewSymptom from './pages/NewSympton/NewSymptom';

function App(){
  return (
    <div className='App'>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/patients' element={<Patients/>} />
            <Route path='/patient/:id' element={<Patient />} />
            <Route path='/newPatient' element={<NewPatient/>} />
            <Route path='/doctors' element={<Doctors/>} />
            <Route path='/doctor/:id' element={<Doctor />} />
            <Route path='/newDoctor' element={<NewDoctor/>} />
            <Route path='/staffs' element={<Staffs/>} />
            <Route path='/staff/:id' element={<Staff />} />
            <Route path='/newStaff' element={<NewStaff/>} />
            <Route path='/symptoms' element={<Symptoms/>}/>
            <Route path='/symptom/:id' element={<Symptom />} />
            <Route path='/newSymptom' element={<NewSymptom />} />
          </Routes>
        </Router>
      
    </div>
  );
}

export default App
