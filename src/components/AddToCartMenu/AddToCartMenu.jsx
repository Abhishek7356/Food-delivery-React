import React from 'react'
import './AddToCartMenu.css'
import FoodCard from '../FoodCard/FoodCard';

function AddToCartMenu(props) {

    const popUpCloseHandler = () => {
        props.setCartMenuShow(false)
    }
    console.log(props.cartItems);
    let cartItems = props.cartItems.map((item) => {
        return (
            <div>
                <div className='cartItem'>
                    <img src={item.strMealThumb} alt="" />
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
        </div>
    )
}

export default AddToCartMenu