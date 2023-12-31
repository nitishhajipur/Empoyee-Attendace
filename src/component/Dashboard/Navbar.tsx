
import { Outlet, Link, useNavigate, NavLink, useLocation } from "react-router-dom";


const Layout = () => {
    const location = useLocation();

    const { pathname }: any = location;
    console.log(pathname)
    return (
        <div className="row App-container">
            <nav className="col-2">
                <div className="nav-container">
                    <h6 className="mb-5 pt-3 ps-2">Employee management</h6>
                    <div className={pathname == '/home' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="/home" className='nav-link'>Home</NavLink>
                    </div>
                    <div className={pathname == '/timesheet' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="/timesheet" className='nav-link'>Timesheet</NavLink>
                    </div>  
                    <div className={pathname == '/calender' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="/calender" className='nav-link'>Calender</NavLink>
                    </div>
                    <div className={pathname == '/project' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="/project" className='nav-link'>Payslip</NavLink>
                    </div>
                    <div className={pathname == '/employee' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="/employee" className='nav-link'>Holidays</NavLink>
                    </div>
                    <div className={pathname == '/leavesBenifits' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="/leavesBenifits" className='nav-link'>Leaves & Benifits</NavLink>
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