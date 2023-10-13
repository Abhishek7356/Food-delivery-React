import React, { useState } from 'react'
import './Popup.css'

function Popup(props) {


    const addToCartHandler = () => {
        props.setAddToCartItem([...props.addToCartItem, props.currentDish]);
        props.setPopup(false)
        // console.log(props.addToCartItem);
    }

    const popUpCloseHandler = () => {
        props.setPopup(false)
    }
    return (
        <div className='popupCintainer'>
            <div className="popupBox">
                <button onClick={popUpCloseHandler} className='btn-close closeBtn'></button>
                <div className="dishMainDetails">
                    <img className='popUpImg' src={props.currentDish.strMealThumb} alt="" />
                    <div className="dishTextDetails">
                        <h4>{props.currentDish.strMeal}</h4>
                        <div className='ingredients'>
                            <h5>Ingredients :</h5>
                            <p>{props.currentDish.strIngredient1}</p>
                            <p>{props.currentDish.strIngredient2}</p>
                            <p>{props.currentDish.strIngredient3}</p>
                        </div>
                        {/* <div className='buttonDiv'> */}
                        <button onClick={addToCartHandler} className='orderNow'>Add to favourite <i class="fa-solid fa-heart"></i></button>
                        {/* </div> */}
                    </div>
                </div>
                <h4>Preparation :</h4>
                <p className='preparation'>{props.currentDish.strInstructions}</p>
            </div>
        </div>
    )
}

export default Popup