import { useState, useEffect } from 'react';

function ClockTimer() {
  const [time, setTime] = useState({
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
    seconds: new Date().getSeconds()
  })
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime({
        minutes: date.getMinutes(),
        hours: date.getHours(),
        seconds: date.getSeconds()
      })
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

  const convertToTwoDigit = (number:any) => {
    return number.toLocaleString('en-US', {
      minimumIntegerDigits: 2
    })
  }

  return (
    <div className='clock'>
      <span className='hour'>{convertToTwoDigit(time.hours)}:</span>
      <span className='minute'>{convertToTwoDigit(time.minutes)}</span>
      <span className='second'>:{convertToTwoDigit(time.seconds)}</span>
      <span className='am-pm'>{time.hours >= 12 ? ' PM' : ' AM'}</span>
    </div>
  );
}

export default ClockTimer;
