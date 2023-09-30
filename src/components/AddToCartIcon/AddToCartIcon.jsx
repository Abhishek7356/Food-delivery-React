import React from 'react'
import './AddToCartIcon.css'

function AddToCartIcon(props) {
    // let cartItemLEngth = props.addToCartItem.length;

    // const cartBoxHandler = () => {
    //     props.setCartMenuShow(true)
    //     props.setToShowCartCard(props.addToCartItem)
    // }

  return (
    <div className='cartIconContainer'>
        <i  class="cartIcon fa-solid fa-cart-plus fa-bounce shadow"><p className='shadow'>1</p></i>
        
    </div>
  )
}

export default AddToCartIcon