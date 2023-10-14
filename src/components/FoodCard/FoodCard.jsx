import React, { useContext, useState } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';
import './FoodCard.css'
import { DispatchContext } from '../../context/AppContext';

function FoodCard(props) {

    const dispatch = useContext(DispatchContext)
    const popUpHandler = async () => {
        props.setLoading(true)
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.item.idMeal}`);
        let data = await response.json();
        props.setLoading(false)
        props.setPopup(true)
        dispatch({ type: 'display_item', payload: data.meals[0] })
    }
    
    return (
        <div onClick={popUpHandler} className='itemContainer'>
            <img src={props.item.strMealThumb} alt="" />
            <h3>{props.item.strMeal}</h3>
        </div>
    )
}

export default FoodCard