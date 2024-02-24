import React,{useState} from 'react'
import { Outlet, Route, Routes ,useOutletContext} from 'react-router'
import Dashboard from '../Dashboard'
import { Calendar } from 'primereact/calendar'
import SheetsTabs from '../Timesheet/TabsComponents'
import Project from '../Project'
import NoPage from '../NoPage'
import { FetchData } from '../../../config/fetch'
const AppIndex=(props:any)=>{
    const [userData, setUserData] = useState<any>({})
    React.useEffect(() => {
      const payload = { url: `http://localhost:3006/api/findUserById/${sessionStorage.id}`, method: 'GET', data: '' }
      FetchData(payload).then((response: any) => {
          console.log(response.data)
          setUserData(response.data)
      })
  },[])
  console.log(userData,"18...userdata")
    return(
        <>
        <Routes>
        <Route path='/' element={<Dashboard />} />
          <Route path='/calender' element={<Calendar />} />
          <Route path='/timesheet' element={<SheetsTabs />} />
          <Route path='/payslips' element={<Project />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Outlet context={userData} />

        </>
    )
}
export default AppIndex