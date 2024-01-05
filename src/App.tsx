// src/App.tsx

import React from 'react';
import Dashboard from './component/Dashboard/Dashboard';
// import Navbar from './component/Dashboard/Navbar';
import AppNavbar from './component/Dashboard/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoPage from './component/Dashboard/NoPage';
import Layout from './component/Dashboard/Navbar';
import './App.css';
import Calender from './component/Dashboard/Calender';
import Employee from './component/Dashboard/Employee';
import Project from './component/Dashboard/Project';
import SighnIn from './component/Dashboard/appauthentication/SighnIn';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SighnIn />}/>
        <Route path="/dashbord" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='/dashbord/calender' element={<Calender />} />
          <Route path='/dashbord/project' element={<Project />} />
          <Route path='/dashbord/employee' element={<Employee />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
