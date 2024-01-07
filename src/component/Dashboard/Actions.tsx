import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import AttendanceAction from './AttendanceAction'
import moment from 'moment'
import 'react-toastify/dist/ReactToastify.css';

function Actions() {
    const [issLoggedIn, setIssLoggedIn] = useState(false)
    const [toastMsg, setToastMsg] = useState('Login successful');
    const [dailyLogs, setDailyLogs] = useState<any>([])

    const handleClockIn = () => {
        issLoggedIn ? setIssLoggedIn(false) : setIssLoggedIn(true)
        issLoggedIn ? setToastMsg('Login successful') : setToastMsg('Logout successful')
        toast(toastMsg)
        const timeStamp = new Date().getTime();
        const time = moment(timeStamp).format("hh:mm:ss");
        dailyLogs.push(time)
        console.log('18....', dailyLogs)

    }
  return (
    <div>
         <div className='row flex-nowrap'>
                        <div className='col-6 action-left-container'>
                            <AttendanceAction />
                            <div className='mt-3'>Start time: {dailyLogs?.length > 0 ? dailyLogs[0] : '--:--'}</div>
                        </div>
                        <div className='col-6 action-right-container'>
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
                                <span>9:00am to 5:00pm</span>
                            </div>
                            <div className='mt-2'>End time: {dailyLogs?.length > 1 ? dailyLogs[dailyLogs.length - 1] : '--:--'}</div>
                            <ToastContainer />
                        </div>
                    </div>
    </div>
  )
}

export default Actions