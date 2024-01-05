
import { Outlet, Link, useNavigate, NavLink, useLocation } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const Layout = () => {
    const location = useLocation();

    const { pathname }: any = location;
    console.log(pathname)
    return (
        <div className="row App-container">
            <nav className="col-2">
                <div className="nav-container">
                    <h6 className="mb-5 pt-3 ps-2">Employee management</h6>
                    <div className={pathname == '/mainMenu' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="/mainMenu" className='nav-link'>Home</NavLink>
                    </div>
                    <div className={pathname == '/mainMenu/timesheet' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="/mainMenu/timesheet" className='nav-link'>Timesheet</NavLink>
                    </div>
                    <div className={pathname == '/mainMenu/calender' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="/mainMenu/calender" className='nav-link'>Calender</NavLink>
                    </div>
                    <div className={pathname == '/mainMenu/project' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="/mainMenu/project" className='nav-link'>Payslip</NavLink>
                    </div>
                    <div className={pathname == '/mainMenu/employee' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="/mainMenu/employee" className='nav-link'>Holidays</NavLink>
                    </div>
                    <div className={pathname == '/mainMenu/leavesBenifits' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="mainMenu/leavesBenifits" className='nav-link'>Leaves & Benifits</NavLink>
                    </div>
                </div>
            </nav>
            <div className="col-10 container-fluid p-2 body-container">
                <Outlet />
            </div>
        </div>
    )
};

export default Layout;