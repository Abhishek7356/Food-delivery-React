import React from 'react'
import './Popup.css'

function Popup(props) {

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
                        <h3>{props.currentDish.strMeal}</h3>
                        <div className='ingredients'>
                            <h6>Ingredients :</h6>
                            <p>{props.currentDish.strIngredient1}</p>
                            <p>{props.currentDish.strIngredient2}</p>
                            <p>{props.currentDish.strIngredient3}</p>
                        </div>
                        <div className='buttonDiv'>
                            <button className='orderNow'>Order now</button>
                        </div>
                    </div>
                </div>
                <p className='preparation'>{props.currentDish.strInstructions}</p>
            </div>
        </div>
    )
}

export default Popup