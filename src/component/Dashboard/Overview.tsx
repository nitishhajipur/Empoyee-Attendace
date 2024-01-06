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

import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function Overview() {

    const [products, setProducts] = React.useState([
        { date: '1-1-2024', startTime: '9:00', endTime: '6:00', effectiveHour: '8hr', grossHour: '9hr' },
        { date: '1-1-2024', startTime: '9:00', endTime: '6:00', effectiveHour: '8hr', grossHour: '9hr' },
        { date: '1-1-2024', startTime: '9:00', endTime: '6:00', effectiveHour: '8hr', grossHour: '9hr' },
        { date: '1-1-2024', startTime: '9:00', endTime: '6:00', effectiveHour: '8hr', grossHour: '9hr' },
        { date: '1-1-2024', startTime: '9:00', endTime: '6:00', effectiveHour: '8hr', grossHour: '9hr' },
        { date: '1-1-2024', startTime: '9:00', endTime: '6:00', effectiveHour: '8hr', grossHour: '9hr' },
        { date: '1-1-2024', startTime: '9:00', endTime: '6:00', effectiveHour: '8hr', grossHour: '9hr' },

    ]);

    const dateBodyTemplate = () => {
        const date = new Date()
        console.log('78...',date)
        return <div>
            {date.toString()}
        </div>
    }
    return (
        <div>
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                <Column body={dateBodyTemplate} header="Date"></Column>
                <Column field="startTime" header="Start time"></Column>
                <Column field="endTime" header="End time"></Column>
                <Column field="effectiveHour" header="Effective hour"></Column>
                <Column field="grossHour" header="Gross hour"></Column>
                <Column field="action" header="Active"></Column>

            </DataTable>
        </div>
    )
}

export default Overview
