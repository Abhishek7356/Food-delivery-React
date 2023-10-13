import React, { useContext, useState } from 'react'
import './AddToCartIcon.css'
import AddToCartMenu from '../AddToCartMenu/AddToCartMenu';
import { StateContext } from '../../context/AppContext';

function AddToCartIcon(props) {

  const [cartMenuShow, setCartMenuShow] = useState(false)

  const itemStates = useContext(StateContext)
  // console.log(itemStates);

  let cartItemLEngth = props.addToCartItem.length;

  const cartBoxHandler = () => {
    setCartMenuShow(true)
  }

  return (
    <div className='cartIconContainer'>
      <i onClick={cartBoxHandler} class="cartIcon fa-solid fa-heart border border-2 border-danger fa-bounce shadow">
        {cartItemLEngth != 0 && <p className='shadow bg-danger'>{cartItemLEngth}</p>}
      </i>
      {cartMenuShow && <AddToCartMenu cartItems={props.addToCartItem} setCartMenuShow={setCartMenuShow} />}
    </div>
  )
}

export default AddToCartIcon
