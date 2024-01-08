import React, { useState } from 'react'
import Overview from './Overview'

import Divider from '@mui/material/Divider';
import Actions from './Actions';
import Earning from './Earning';


function Dashboard() {

    return (
        <div className='bg-secodary'>
            <h3 className='text-light'>Good morning Akshay...</h3>
            <div className='row gap-4 mt-4 flex-nowrap'>
                <div className='col-3'>
                    <div className='m-2 hour-card'>
                        <span className='h-name'>
                            Regular
                        </span>
                        <div className='hours'>
                            412.1 Hours
                        </div>
                        <span className='growth'>13.1% up from last week</span>
                    </div>
                    <div className='m-2 hour-card'>
                        <span className='h-name'>
                            Over time
                        </span>
                        <div className='hours'>
                            93.3 Hours
                        </div>
                        <span className='growth'>7.1% up from last week</span>
                    </div>
                    <div className='m-2 hour-card'>
                        <span className='h-name'>
                            Total hour
                        </span>
                        <div className='hours'>
                            505.4 Hours
                        </div>
                        <span className='growth'>12.1% up from last week</span>
                    </div>
                </div>
                <div className='col-4 m-2 cards'>
                    <h6 className='p-2 h-name'>Weekly Earnings</h6>
                    <Divider color="primary" />
                    <Earning/>
                </div>
                <div className='col-4 m-2 cards'>
                    <h6 className='p-2 h-name'>Actions</h6>
                    <Divider color="primary" />
                    <Actions />
                </div>
            </div>
            <div className='row mt-3'>
                <Overview />
            </div>
        </div>
    )
}

export default Dashboard