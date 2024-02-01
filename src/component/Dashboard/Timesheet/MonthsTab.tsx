import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function MonthsTab() {
    const month = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    const currentMonth = new Date().getMonth();
    console.log('9', currentMonth)
    return (<>
        <span className='mt-1'>Filter By Month : </span><select name="filterByMonth" className='form-select w-50 ms-2' id="filter">
            <option>Select month</option>
            {
                month?.map((item: any) => <option>{item}</option>)
            }
        </select>
    </>
    );
}
// <ButtonGroup variant="contained" aria-label="outlined primary button group">
//     {
//         month.map((item: any, index: any) => {

//             return <Button>{item}</Button>
//         })
//     }
// </ButtonGroup>