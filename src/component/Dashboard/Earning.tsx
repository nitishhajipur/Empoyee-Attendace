import React, { useState } from 'react'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useOutletContext } from "react-router-dom";

function Earning() {
    const date = new Date()
    const [userData]: any = useOutletContext();
    const [workingDetails, setWorkingDetails] = useState<any>({
        effective: 20 ,
        gross: 39,
        overTime: 6,
        hourlyRate: 40,
        weekStart: new Date(date.setDate(date.getDate() - 6)).toString().slice(3, 11),
        weekEnd: new Date().toString().slice(3, 11)
    });
    setTimeout(() => {
        setViewEarning(false)
    }, 20000)
    const [viewEarning, setViewEarning] = useState(false)
    const handleViewEarning = () => {
        setViewEarning(true)
    }
    return (
        <>
            <div className='m-2'>
                <div className='row flex-nowrap'>
                    <div className='col-6'>
                        <h5>Hourly rate</h5>
                        <div className='mt-1'>Effective Hrs </div>
                        <div className='mt-1'>Gross Hrs</div>
                        <div className='mt-1'>Overtime</div>
                        <div className='mt-1'>Week Duration </div>
                        <div className='mt-2'>Total earning </div>
                    </div>
                    <div className='col-1'>
                        <div className='mt-1'>:</div>
                        <div className='mt-1'>:</div>
                        <div className='mt-1'>:</div>
                        <div className='mt-1'>:</div>
                        <div className='mt-1'>:</div>
                        <div className='mt-2'>:</div>
                    </div>
                    <div className='col-5'>
                        <h5>{userData.hourlyPay}$</h5>
                        <span className='text-warning'>{workingDetails.effective} hr</span>
                        <div className='text-success mt-2'>{workingDetails.gross} hr</div>
                        <div className='text-success'>
                            {workingDetails.overTime} hr
                            {workingDetails.overTime > 5 &&
                                <InsertEmoticonIcon sx={{ color: '#a1ad1a', mb: '1px', ml: '5px', fontSize: '15px' }} />
                            }
                        </div>
                        <span className='mt-2'> {workingDetails.weekStart} to {workingDetails.weekEnd}</span>
                        <div className='mt-2'>
                            {
                                viewEarning ?
                                    <h4>&nbsp;{(workingDetails.effective + workingDetails.overTime) * workingDetails.hourlyRate}$

                                    </h4>
                                    : <button
                                        className='btn btn-outline-info '
                                        onClick={handleViewEarning}

                                    >
                                        View earning
                                    </button>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Earning