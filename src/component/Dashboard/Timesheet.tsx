import React, { useState } from "react";
import './timesheet.css'
const data = [
    {
      date: '01/05/2024',
      startTime: '9:00',
      finishTime: '6:00',
      regularHours: '8:00',
      overtime: '02',
      sick: '01',
      vacation: '01',
      holiday: '04',
      otherhrs: "10",
      totalhrs: "20",
    },
   
   
  ]
export default function Timesheet() {
    const [employeeData, setEmployeeData] = useState(data)

    const onChangeInput = (e:any, employeeId:any) => {
      const { name, value } = e.target 
      // const editData = employeeData.map((item) =>
      //   item.employeeId === employeeId && name ? { ...item, [name]: value } : item
      // )
  
      // setEmployeeData(editData)
    }
  return (
    <div className="timeSheet">
    <h5 className="title">Weekly Timesheet</h5>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Start Time</th>
          <th>Finish Time</th>
          <th>Regular hrs</th>
          <th>Overtime</th>
          <th>Sick</th>
          <th>Vacation</th>
          <th>Holiday</th>
          <th>Other hrs</th>
          <th>Total hrs</th>
        </tr>
      </thead>
      <tbody>
        {employeeData.map(({date,startTime,finishTime,regularHours,overtime,sick,vacation,holiday,otherhrs,totalhrs},index:any) => (
          <tr key={index}>
            <>{console.log("51...",date,startTime,finishTime,regularHours,overtime,sick,vacation,holiday,otherhrs,totalhrs)}</>
            <td>
              <input
                name="date"
                // value={data.date}
                type="date"
                // onChange={(e) => onChangeInput(e, employeeId)}
                // placeholder="Type Name"
              />
            </td>
            <td>
              <input
                name="email"
                // value={data.finishTime}
                type="number"
                // onChange={(e) => onChangeInput(e, employeeId)}
                // placeholder="Type Email"
              />
            </td>
            <td>
              <input
                name="position"
                type="number"
                // value={position}
                // onChange={(e) => onChangeInput(e, employeeId)}
                // placeholder="Type Position"
              />
            </td>
            <td>
              <input
                name="position"
                type="number"
                // value={position}
                // onChange={(e) => onChangeInput(e, employeeId)}
                // placeholder="Type Position"
              />
            </td>
            <td>
              <input
                name="position"
                type="number"
                // value={position}
                // onChange={(e) => onChangeInput(e, employeeId)}
                // placeholder="Type Position"
              />
            </td>
            <td>
              <input
                name="position"
                type="number"
                // value={position}
                // onChange={(e) => onChangeInput(e, employeeId)}
                // placeholder="Type Position"
              />
            </td>
            <td>
              <input
                name="position"
                type="number"
                // value={position}
                // onChange={(e) => onChangeInput(e, employeeId)}
                // placeholder="Type Position"
              />
            </td>
            <td>
              <input
                name="position"
                type="number"
                // value={position}
                // onChange={(e) => onChangeInput(e, employeeId)}
                // placeholder="Type Position"
              />
            </td>
            <td>
              <input
                name="position"
                type="number"
                // value={position}
                // onChange={(e) => onChangeInput(e, employeeId)}
                // placeholder="Type Position"
              />
            </td>
            <td>
              <input
                name="position"
                type="number"
                // value={position}
                // onChange={(e) => onChangeInput(e, employeeId)}
                // placeholder="Type Position"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  );
}
