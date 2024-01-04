import React from 'react'

function Dashboard() {
    return (
        <div className='bg-secodary'>
            <h3 className='text-light'>Good morning Akshay...</h3>
            <div className='container-fluid row gap-4 mt-4'>
                <div className='col-2'>
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

                </div>
                <div className='col-5 m-2 cards'>

                </div>
            </div>
        </div>
    )
}

export default Dashboard