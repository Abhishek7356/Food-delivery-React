import React, { useState } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';
import './FoodCard.css'

function FoodCard(props) {


    const popUpHandler = async () => {
        props.setLoading(true)
        // console.log(props.item.idMeal);
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.item.idMeal}`);
        let data = await response.json();
        console.log(props.item);
        props.setLoading(false)
        props.setPopup(true)
        props.setCurrentDish(data.meals[0])
    }

    // console.log(props.item);

    return (
        <div onClick={popUpHandler} className='itemContainer'>
            <img src={props.item.strMealThumb} alt="" />
            <h3>{props.item.strMeal}</h3>
        </div>
        // <MDBCard onClick={popUpHandler} className='itemContainer'>
        //     <MDBCardImage src={props.item.strMealThumb} position='top' alt='...' />
        //     <MDBCardBody>
        //         <MDBCardTitle>{props.item.strMeal}</MDBCardTitle>
        //     </MDBCardBody>
        // </MDBCard>
    )
}

export default FoodCard