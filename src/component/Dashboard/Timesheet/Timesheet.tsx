
import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import EditNoteIcon from '@mui/icons-material/EditNote';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import './timesheet.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import MonthsTab from './MonthsTab';
import dataa from '../data.json';
import { InputSwitch } from 'primereact/inputswitch';

function TimeSheet() {

  // const [weekData, setWeekData] = React.useState<any>([]);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [rowClick, setRowClick] = useState(true);
  // let weekday: any = []
  console.log('json', dataa)
  // useEffect(() => {
  //   const today = new Date();
  //   let _day: any = today.getDay();
  //   // const _date = date.getDate();
  //   const _data = [...[], ...data]
  //   let lastDay: any;
  //   // let firstDay: any;
  //   if (_day === 0) {
  //     _day = _day + 6
  //   }
  //   for (var i = _day + 1; i >= 0; i--) {

  //     lastDay = new Date(
  //       today.setDate(today.getDate() - today.getDay() + i),
  //     );
  //     weekday.push(lastDay)
  //     console.log('78...', today.getDay())
  //   }
  //   _data.map((item, index) => {
  //     item.date = weekday[index]?.toString().slice(0, 15)
  //   })
  //   setWeekData([...weekData, ..._data])
  // }, []);

  const actionBodyTemplate = (row: any) => {
    return <>
      <Tooltip title="Save">
        <IconButton>
          <CheckCircleOutlineIcon sx={{ color: 'green' }} />
        </IconButton>
      </Tooltip> | <Tooltip title="Clear">
        <IconButton>
          <CancelIcon sx={{ color: 'red' }} />
        </IconButton>
      </Tooltip>
    </>

  }
  const startTimeTemplate = (rowData: any) => {
    console.log('68....', rowData)
    return <div style={{ width: '1rem !important' }}>
      <input type="time" className='form-control' value={rowData.logs[0].logInTime} />
    </div>
  }
  const endTimeTemplate = (rowData: any) => {
    return <div>
      <input type="time" className='form-control' value={rowData.logs[0].logOutTime} />
    </div>
  }
  const effectiveTimeTemplate = (rowData: any) => {
    return <div>
      <input type="text" className='form-control w-100' value={rowData.logs[0].effectiveHours} disabled />
    </div>
  }
  const grossTimeTemplate = (rowData: any) => {
    return <div>
      <input type="text" className='form-control w-100' value={rowData.logs[0].grossTime} disabled />
    </div>
  }
  const overTimeTemplate = (rowData: any) => {
    return <div>
      <input type="text" className='form-control w-100 ' value={rowData.logs[0].breakTime} disabled />
    </div>
  }

  return (
    <div>
      <div className='row mb-3'>
        <div className='col-6'>
          <h6 className='m-2'>Monthly report</h6>
        </div>
        <div className='col-6 d-flex justify-content-end'>
          <MonthsTab />
        </div>
      </div>
      {/* <hr /> */}
      <DataTable
        value={dataa.logDetails}
        tableStyle={{ minWidth: '50rem' }}
        selection={selectedProducts && selectedProducts}
        onSelectionChange={(e: any) => {
          setSelectedProducts(e.value)
          console.log('102...', e.value,selectedProducts)
        }}
        dataKey="id"
      >
        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
        <Column field='date' header="Date" frozen alignFrozen="right" ></Column>
        <Column body={startTimeTemplate} header="Start time" style={{ width: '14em' }} ></Column>
        <Column body={endTimeTemplate} header="End time" style={{ width: '14em' }}></Column>
        <Column body={effectiveTimeTemplate} header="Effective hour" style={{ width: '14em' }}></Column>
        <Column body={grossTimeTemplate} header="Gross hour" style={{ width: '14em' }}></Column>
        <Column body={overTimeTemplate} header="Over time" style={{ width: '14em' }}></Column>
        <Column body={actionBodyTemplate} header="Action" style={{ width: '14em' }}></Column>
      </DataTable>
      <div className='m-2 d-flex justify-content-end'>
        <button className='btn btn-outline-primary'>Save</button>
        <button className='btn btn-success ms-2'>Submit</button>
      </div>
    </div>
  )
}

export default TimeSheet
