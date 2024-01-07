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
import Timesheet from './component/Dashboard/Timesheet';
import SighnIn from './component/Dashboard/appauthentication/SighnIn';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SighnIn />} />
        <Route path="/" element={<Layout />}>
          <Route path='/home' element={<Dashboard />} />
          <Route path='/calender' element={<Calender />} />
          <Route path='/timesheet' element={<Timesheet />} />
          <Route path='/payslips' element={<Project />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
