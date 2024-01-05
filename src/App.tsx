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
import Timesheet from './component/Dashboard/Timesheet';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SighnIn />}/>
        <Route path="/mainMenu" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='/mainMenu/calender' element={<Calender />} />
          <Route path='/mainMenu/project' element={<Project />} />
          <Route path='/mainMenu/employee' element={<Employee />} />
          <Route path='/mainMenu/timesheet' element={<Timesheet />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
