// import FullCalendar from "@fullcalendar/react";
// import daygridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import { useState } from "react";
// // import { v4 as uuid } from "uuid";
// // import {v4 as uuid} from "uuid";

// const EventItem = (info: any) => {
//     const { event } = info;
//     return (
//         <div>
//             <p>{event.title}</p>
//         </div>
//     );
// };

//  const Overview = () => {
//     const [events, setEvents] = useState<any>([]);

//     const handleSelect = (info: any) => {
//         alert('')
//         const { start, end } = info;
//         const eventNamePrompt = prompt("Enter, event name");
//         if (eventNamePrompt) {
//             setEvents([
//                 ...events,
//                 {
//                     start,
//                     end,
//                     title: eventNamePrompt,
//                     // id: uuid()
//                 }
//             ]);
//         }
//     };

//     return (
//         <div>
//             <FullCalendar
//                 editable
//                 selectable
//                 events={events}
//                 select={handleSelect}
//                 weekends={false}
//                 headerToolbar={{
//                     start: "today prev next",
//                     end: "dayGridMonth dayGridWeek dayGridDay"
//                 }}
//                 eventContent={(info) => <EventItem info={info} />}
//                 plugins={[daygridPlugin, interactionPlugin]}
//             // views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
//             />
//         </div>
//     );
// };

// export default Overview;

import React, { useEffect } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function Overview() {
    const data: any = [
        { id: 1, startTime: '9:00', endTime: '6:00', effectiveHour: '8hr', grossHour: '9hr' },
        { id: 2, startTime: '9:00', endTime: '6:00', effectiveHour: '8hr', grossHour: '9hr' },
        { id: 3, startTime: '9:00', endTime: '6:00', effectiveHour: '8hr', grossHour: '9hr' },
        { id: 4, startTime: '9:00', endTime: '6:00', effectiveHour: '8hr', grossHour: '9hr' },
        { id: 5, startTime: '9:00', endTime: '6:00', effectiveHour: '8hr', grossHour: '9hr' },
        { id: 6, startTime: '9:00', endTime: '6:00', effectiveHour: '8hr', grossHour: '9hr' },
        { id: 7, startTime: '9:00', endTime: '6:00', effectiveHour: '8hr', grossHour: '9hr' },
    ]
    const [weekData, setWeekData] = React.useState<any>([]);
    let weekday:any = []
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednusday', 'Thursday', 'Friday', 'Saturday']
    useEffect(() => {
        const today = new Date();
        const _day: any = today.getDay();
        // const _date = date.getDate();
        const _data = [...[], ...data]
        let lastDay: any;
       
        for (var i = _day; i >= 0; i--) {
            console.log(weekdays[i])
            //     
            lastDay = new Date(
                today.setDate(today.getDate() - today.getDay() + i),
            );
            weekday.push(lastDay)
        }
        console.log('78...', weekday)
        _data.map((item, index) => {
            item.date = weekday[index]?.toString().slice(0,15)
        })
        setWeekData([...weekData, ..._data])
    }, [])
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h6 className='m-2'>Weekly report</h6>
                <button className='btn btn-outline-primary'>Approval status</button>
            </div>
            <hr />
            <DataTable value={weekData} tableStyle={{ minWidth: '50rem' }}>
                <Column field='date' header="Date" frozen alignFrozen="right"></Column>
                <Column field="startTime" header="Start time"></Column>
                <Column field="endTime" header="End time"></Column>
                <Column field="effectiveHour" header="Effective hour"></Column>
                <Column field="grossHour" header="Gross hour"></Column>
                <Column field="action" header="Action"></Column>

            </DataTable>
        </div>
    )
}

export default Overview
