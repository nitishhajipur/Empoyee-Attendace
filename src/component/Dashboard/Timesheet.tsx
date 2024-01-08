
import React, { useEffect } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import EditNoteIcon from '@mui/icons-material/EditNote';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function Overview() {
  const data: any = [
    { id: 1, startTime: '9:00', endTime: '6:00', effectiveHour: '8hr', grossHour: '9hr', overTime: '2hr' },
    { id: 2, startTime: '9:00', endTime: '6:00', effectiveHour: '8hr', grossHour: '9hr', overTime: '1hr' },
    { id: 3, startTime: '9:00', endTime: '20:00', effectiveHour: '8hr', grossHour: '9hr', overTime: '5hr' },
    { id: 4, startTime: '9:00', endTime: '6:00', effectiveHour: '8hr', grossHour: '9hr', overTime: '1hr' },
    { id: 5, startTime: '9:00', endTime: '6:00', effectiveHour: '8hr', grossHour: '9hr', overTime: '3hr' },
    { id: 6, startTime: '9:00', endTime: '6:00', effectiveHour: '8hr', grossHour: '9hr', overTime: '4hr' },
    { id: 7, startTime: '9:00', endTime: '6:00', effectiveHour: '8hr', grossHour: '9hr', overTime: '1hr' },

  ]
  const [weekData, setWeekData] = React.useState<any>([]);
  let weekday: any = []
  // const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednusday', 'Thursday', 'Friday', 'Saturday']
  useEffect(() => {
    const today = new Date();
    let _day: any = today.getDay();
    // const _date = date.getDate();
    const _data = [...[], ...data]
    let lastDay: any;
    // let firstDay: any;
    if (_day === 0) {
      _day = _day + 6
    }
    for (var i = _day + 1; i >= 0; i--) {

      lastDay = new Date(
        today.setDate(today.getDate() - today.getDay() + i),
      );
      weekday.push(lastDay)
      console.log('78...', today.getDay())
    }
    _data.map((item, index) => {
      item.date = weekday[index]?.toString().slice(0, 15)
    })
    setWeekData([...weekData, ..._data])
  }, []);

  const actionBodyTemplate = (row: any) => {
    return <Tooltip title="Regularize">
      <IconButton>
        <EditNoteIcon sx={{ color: '#ffffff' }} />
      </IconButton>
    </Tooltip>
  }
  const startTimeTemplate = () => {
    return <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['TimePicker']}>
          <TimePicker label="Basic time picker" />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  }
  const endTimeTemplate = () => {
    return <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['TimePicker']}>
          <TimePicker label="Basic time picker" />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  }
  const effectiveTimeTemplate = () => {
    return <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['TimePicker']}>
          <TimePicker label="Basic time picker" />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  }
  const grossTimeTemplate = () => {
    return <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['TimePicker']}>
          <TimePicker label="Basic time picker" />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  }
  const overTimeTemplate = () => {
    return <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['TimePicker']}>
          <TimePicker label="Basic time picker" />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  }

  return (
    <div>
      <div className='d-flex justify-content-between'>
        <h6 className='m-2'>Weekly report</h6>
        <button className='btn btn-outline-primary me-4'>Approval status</button>
      </div>
      <hr />
      <DataTable value={weekData} tableStyle={{ minWidth: '50rem' }}>
        <Column field='date' header="Date" frozen alignFrozen="right"></Column>
        <Column body={startTimeTemplate} header="Start time"></Column>
        <Column body={endTimeTemplate} header="End time"></Column>
        <Column body={effectiveTimeTemplate} header="Effective hour"></Column>
        <Column body={grossTimeTemplate} header="Gross hour"></Column>
        <Column body={overTimeTemplate} header="Over time"></Column>
        {/* <Column body={actionBodyTemplate} header="Action"></Column> */}

      </DataTable>
    </div>
  )
}

export default Overview
