import React from "react";
import { useState } from 'react'
const data = [
    {
      employeeId: '01',
      name: 'John Doe',
      email: 'johndoe@email.com',
      position: 'Frontend Developer',
      overtime: '02',
      sick: 'Sara',
      vacation: 'sara@email.com',
      holiday: 'HR Executive',
      otherhrs: "10",
      totalhrs: "20",
    },
    {
      employeeId: '02',
      name: 'Sara',
      email: 'sara@email.com',
      position: 'HR Executive',
      overtime: '02',
      sick: 'Sara',
      vacation: 'sara@email.com',
      holiday: 'HR Executive',
      otherhrs: "10",
      totalhrs: "20",
    },
    {
      employeeId: '03',
      name: 'Mike',
      email: 'mike@email.com',
      position: 'Backend Developer',
      overtime: '02',
      sick: 'Sara',
      vacation: 'sara@email.com',
      holiday: 'HR Executive',
      otherhrs: "10",
      totalhrs: "20",
    },
  ]
export default function Timesheet() {
    const [employeeData, setEmployeeData] = useState(data)

    const onChangeInput = (e:any, employeeId:any) => {
      const { name, value } = e.target
  
      const editData = employeeData.map((item) =>
        item.employeeId === employeeId && name ? { ...item, [name]: value } : item
      )
  
      setEmployeeData(editData)
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
        {employeeData.map(({ employeeId, name, email, position }) => (
          <tr key={employeeId}>
            <td>
              <input
                name="date"
                // value={name}
                type="date"
                onChange={(e) => onChangeInput(e, employeeId)}
                placeholder="Type Name"
              />
            </td>
            <td>
              <input
                name="email"
                value={email}
                type="text"
                onChange={(e) => onChangeInput(e, employeeId)}
                placeholder="Type Email"
              />
            </td>
            <td>
              <input
                name="position"
                type="text"
                value={position}
                onChange={(e) => onChangeInput(e, employeeId)}
                placeholder="Type Position"
              />
            </td>
            <td>
              <input
                name="position"
                type="text"
                value={position}
                onChange={(e) => onChangeInput(e, employeeId)}
                placeholder="Type Position"
              />
            </td>
            <td>
              <input
                name="position"
                type="text"
                value={position}
                onChange={(e) => onChangeInput(e, employeeId)}
                placeholder="Type Position"
              />
            </td>
            <td>
              <input
                name="position"
                type="text"
                value={position}
                onChange={(e) => onChangeInput(e, employeeId)}
                placeholder="Type Position"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  );
}
