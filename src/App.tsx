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


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='/calender' element={<Calender />} />
          <Route path='/project' element={<Project />} />
          <Route path='/employee' element={<Employee />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
