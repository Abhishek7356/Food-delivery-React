import React, { useContext, useState } from 'react'
import './Popup.css'
import { DispatchContext, StateContext } from '../../context/AppContext';

function Popup(props) {

    const popUpItem = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    const { popup } = popUpItem;
    const addToCartHandler = () => {
        // props.setAddToCartItem([...props.addToCartItem, props.currentDish]);
        dispatch({ type: 'add_to_cart', payload: popup })
        props.setPopup(false)
    }

    const popUpCloseHandler = () => {
        props.setPopup(false)
    }
    return (
        <div className='popupCintainer'>
            <div className="popupBox">
                <button onClick={popUpCloseHandler} className='btn-close closeBtn'></button>
                <div className="dishMainDetails">
                    <img className='popUpImg' src={popup.strMealThumb} alt="" />
                    <div className="dishTextDetails">
                        <h4>{popup.strMeal}</h4>
                        <div className='ingredients'>
                            <h5>Ingredients :</h5>
                            <p>{popup.strIngredient1}</p>
                            <p>{popup.strIngredient2}</p>
                            <p>{popup.strIngredient3}</p>
                        </div>
                        {props.status == undefined &&
                            <button onClick={addToCartHandler} className='orderNow'>Add to favourite <i class="fa-solid fa-heart"></i></button>
                        }

                    </div>
                </div>
                <h4>Preparation :</h4>
                <p className='preparation'>{popup.strInstructions}</p>
            </div>
        </div>
    )
}

export default Popup