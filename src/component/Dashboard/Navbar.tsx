
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
                    <div className={pathname == '/dashbord' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="/dashbord" className='nav-link'>Dashboard</NavLink>
                    </div>
                    <div className={pathname == '/dashbord/calender' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="/dashbord/calender" className='nav-link'>Calender</NavLink>
                    </div>
                    <div className={pathname == '/dashbord/project' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="/dashbord/project" className='nav-link'>My project</NavLink>
                    </div>
                    <div className={pathname == '/dashbord/employee' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="/dashbord/employee" className='nav-link'>Employee</NavLink>
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