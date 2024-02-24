// src/App.tsx

import React, { Suspense, lazy } from 'react';
import Dashboard from './component/Dashboard/Dashboard';
// import Navbar from './component/Dashboard/Navbar';
import AppNavbar from './component/Dashboard/navBar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoPage from './component/Dashboard/NoPage';
import Layout from './component/Dashboard/navBar/Navbar';
import './App.scss';
import Calender from './component/Dashboard/Calender';
import Employee from './component/Dashboard/Employee';
import Project from './component/Dashboard/Project';
// import Timesheet from './component/Dashboard/Timesheet/Timesheet';
import { ToastContainer, toast } from 'react-toastify';
import TimeSheet from './component/Dashboard/Timesheet/Timesheet';
import SheetsTabs from './component/Dashboard/Timesheet/TabsComponents';
import { useSelector } from 'react-redux';
import { privateRoutes } from './constants/privateRoutes';
import PrivateRoute from './component/root/Routes';


function App() {
  const {isAuthenticated}=useSelector((state:any)=>state.application)
  const SinghnIn=lazy(()=>import('./component/Dashboard/appauthentication/SighnIn'))
  return (
    <Suspense fallback={"...loading"}>
      {
        !isAuthenticated && 
      <Routes>
           <Route index element={<SinghnIn/>}/>
           <Route path={'*'} element={< NoPage/>}/>
          </Routes>

          }
      { isAuthenticated && 
      <Routes>
        {

        privateRoutes?.map((item:any,index:number)=>{
          return(
            <Route path={item.pathName} key={index}
            element={<PrivateRoute to={'/'} isAuthenticated={isAuthenticated}> 
            <item.component/>
            </PrivateRoute>}
            >{item?.renderChildren && item?.children?.map((childRoute:any,cIndex:number)=>{
              return(
                <Route path={childRoute.pathName} 
                key={cIndex}
                
                element={<PrivateRoute to={'/'} isAuthenticated={isAuthenticated}>
                  {<childRoute.component/>}</PrivateRoute>}></Route>
              )
            })}
            </Route>
          )
        })
      }
        
        </Routes>
      }
      {/* <Routes>
       
        <Route path="/" element={<Layout />}>
          <Route path='/home' element={<Dashboard />} />
          <Route path='/calender' element={<Calender />} />
          <Route path='/timesheet' element={<SheetsTabs />} />
          <Route path='/payslips' element={<Project />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes> */}
      </Suspense>
  );
}

export default App;
