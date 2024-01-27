import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import AttendanceAction from './AttendanceAction'
import moment from 'moment'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useOutletContext } from "react-router-dom";

function Actions() {
    const [issLoggedIn, setIssLoggedIn] = useState(false)
    const [toastMsg, setToastMsg] = useState('Login successful');
    const [dailyLogs, setDailyLogs] = useState<any>([])
    const [userData]: any = useOutletContext();
    const navigate = useNavigate()


    const handleClockIn = () => {
        issLoggedIn ? setIssLoggedIn(false) : setIssLoggedIn(true)
        issLoggedIn ? setToastMsg('Login successful') : setToastMsg('Logout successful')
        toast(toastMsg)
        const timeStamp = new Date().getTime();
        const time = moment(timeStamp).format("hh:mm:ss");
        dailyLogs.push(time)
        console.log('18....', dailyLogs)

    }
    const handleNavigate = ()=>{
        navigate('/timesheet')
    }
    return (
        <div>
            <div className='row flex-nowrap'>
                <div className='col-6 action-left-container'>
                    <AttendanceAction />
                    {
                        userData.attendanceAction === 'webClockIn' ?  <div className='mt-3'>Start time: {dailyLogs?.length > 0 ? dailyLogs[0] : '--:--'}</div> :<></>
                    }
                   
                </div>
                <div className='col-6 action-right-container'>

                    {
                        userData.attendanceAction === 'webClockIn' ? <>
                            {
                                !issLoggedIn ? <button
                                    className='btn btn-primary'
                                    onClick={handleClockIn}>Web Clock-in</button> :
                                    <button
                                        className='btn btn-primary'
                                        onClick={handleClockIn}>Web Clock-out</button>
                            }
                            <div className='d-block mt-3'>
                                <div className='text-secondary'>
                                    Shift: General
                                </div>
                                <span>{userData.shift}</span>
                            </div>
                            <div className='mt-2'>End time: {dailyLogs?.length > 1 ? dailyLogs[dailyLogs.length - 1] : '--:--'}</div>
                            <ToastContainer />
                        </> : <button className='btn btn-outline-info mt-2' onClick={handleNavigate}>Go to Timesheet</button>
                    }
                    {/* {
                        !issLoggedIn ? <button
                            className='btn btn-primary'
                            onClick={handleClockIn}>Web Clock-in</button> :
                            <button
                                className='btn btn-primary'
                                onClick={handleClockIn}>Web Clock-out</button>
                    } */}


                </div>
            </div>
        </div>
    )
}

export default Actions