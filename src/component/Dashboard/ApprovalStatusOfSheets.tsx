import React, { useState } from 'react'
import DialogContainer from '../commonComponents/CustomDialog'
const ApprovalStatusOfSheets=()=>{
    const [open,setOpen]=useState(false)
    const openCustomDialog=()=>{
        setOpen(true)
    }
    const onClose=()=>{
        setOpen(false)
    }
    return(
        <>
            <button className='btn btn-outline-primary me-4' onClick={openCustomDialog}>Approval status</button>
            <DialogContainer
            title={"Status Of Submitted Sheets"}
            open={open}
            actionType={'Close'}
            maxWidth={'sm'}
            fullWidth={true}
            onClose={onClose} 
            >
                <p>
                    Status Of The Submitted Sheets Details
                </p>

            </DialogContainer>

        </>
    )
}
export default ApprovalStatusOfSheets