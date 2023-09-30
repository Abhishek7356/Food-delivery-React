import React from 'react'
import './AddToCartMenu.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';

function AddToCartMenu(props) {

    const popUpCloseHandler = () => {
        props.setCartMenuShow(false)
    }

    return (
        <div className='cartItemsMenu'>
            <div className="innerCartContainer">
                <button onClick={popUpCloseHandler} className='btn-close closeBtn'></button>
                <div>
                    <h3>Cart items</h3>
                </div>
            </div>
        </div>
    )
}

export default AddToCartMenu