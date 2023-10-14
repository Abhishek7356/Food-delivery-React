import React, { useContext, useState } from 'react'
import './AddToCartMenu.css'
import { StateContext } from '../../context/AppContext';
import Popup from '../Popup/Popup';

function AddToCartMenu(props) {

    const [popup, setpopup] = useState(false)

    const states = useContext(StateContext);
    const { favItems } = states;

    const popUpCloseHandler = () => {
        props.setCartMenuShow(false)
    }
    console.log(props.cartItems);
    let cartItems = favItems.map((item) => {
        return (
            <div>
                <div className='cartItem'>
                    <img onClick={() => setpopup(true)} src={item.strMealThumb} alt="" />
                    <div className="cartItemDetails">
                        <h3>{item.strMeal}</h3>
                        <p>{item.strCategory}</p>
                        <a href={item.strYoutube}> Click to watch preparation video</a>
                    </div>
                </div>
                <hr />
            </div>
        )
    })

    return (
        <div className='cartItemsMenu'>
            <div className="innerCartContainer">
                <button onClick={popUpCloseHandler} className='btn-close closeBtn'></button>
                <div className='mb-4'>
                    <h3 className='text-center'>Favourite items<i class=" fa-solid fa-heart text-danger ms-3"></i></h3>
                    <hr />
                </div>
                {cartItems}
            </div>
            {popup ? <Popup setPopup={setpopup} status={true} /> : ''}
        </div>
    )
}

export default AddToCartMenu