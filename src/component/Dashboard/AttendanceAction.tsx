import React from 'react'
import ClockTimer from './Clock';


function AttendanceAction() {
    const date = new Date()
    return (
        <div>
            <ClockTimer />
            <span>{date.toString().slice(0,15)}</span>
        </div>
    )
}

export default AttendanceAction