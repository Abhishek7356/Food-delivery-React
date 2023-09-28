import React from 'react'
import './Loader.css'
import { MDBSpinner } from 'mdb-react-ui-kit';

function Loader() {
    return (
        <div className='loader'>
            <MDBSpinner role='status' className='me-2' color='warning'>
                <span className='visually-hidden'>Loading...</span>
            </MDBSpinner>Loading...
        </div>
    )
}

export default Loader