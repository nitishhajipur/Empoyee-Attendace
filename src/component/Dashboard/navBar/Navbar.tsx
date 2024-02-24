
import { Outlet, Link, useNavigate, NavLink, useLocation, useOutletContext } from "react-router-dom";
import Header from "../../Dashboard/Header";
import React, { useState } from "react";
import { FetchData } from "../../../config/fetch";
import AppIndex from "./NavIndex";
// import { useOutletContext } from "react-router-dom"


const Layout = () => {
    const location = useLocation();

    const { pathname }: any = location;
    console.log(pathname)

    return (
        <div className="row App-container">
            <nav className="col-2">
                <div className="nav-container">
                    <h6 className="mb-5 pt-3 ps-2">Employee management</h6>
                    <div className={pathname == '/' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                    </div>
                    <div className={pathname == '/timesheet' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="/timesheet" className='nav-link'>Timesheet</NavLink>
                    </div>
                    <div className={pathname == '/calender' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="/calender" className='nav-link'>Calender</NavLink>
                    </div>
                    <div className={`disablelink ${(pathname == '/project') ?'selected-nav' : 'nav-item'}` }>
                        <NavLink to="/project" className='nav-link' onClick={(e)=>{e.preventDefault()}}>Payslip</NavLink>
                    </div>
                    <div className={`disablelink ${(pathname == '/employee') ? 'selected-nav' : 'nav-item'}`}>
                        <NavLink to="/employee" className='nav-link' onClick={(e)=>{e.preventDefault()}}>Holidays</NavLink>
                    </div>
                    <div className={`disablelink ${(pathname == '/leavesBenifits') ? 'selected-nav' : 'nav-item'}`}>
                        <NavLink to="/leavesBenifits" className='nav-link' onClick={(e)=>{e.preventDefault()}}>Leaves & Benifits</NavLink>
                    </div>
                </div>
            </nav>
            <div className="col-10 container-fluid p-2 body-container">
                <Header />
                <AppIndex/>
            </div>
        </div>
    )
};

export default Layout;