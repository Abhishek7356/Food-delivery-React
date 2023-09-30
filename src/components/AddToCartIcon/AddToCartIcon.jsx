import React, { useState } from 'react'
import './AddToCartIcon.css'
import AddToCartMenu from '../AddToCartMenu/AddToCartMenu';

function AddToCartIcon(props) {

  const [cartMenuShow, setCartMenuShow] = useState(false)

  let cartItemLEngth = props.addToCartItem.length;

  const cartBoxHandler = () => {
    setCartMenuShow(true)
  }

  return (
    <div className='cartIconContainer'>
      <i onClick={cartBoxHandler} class="cartIcon fa-solid fa-cart-plus fa-bounce shadow">
        {cartItemLEngth != 0 && <p className='shadow'>{cartItemLEngth}</p>}
      </i>
      {cartMenuShow && <AddToCartMenu cartItems={props.addToCartItem} setCartMenuShow={setCartMenuShow} />}
    </div>
  )
}

export default AddToCartIcon