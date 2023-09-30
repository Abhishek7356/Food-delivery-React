import React, { useContext, useState } from 'react'
import './specialDish.css'
import FoodCard from '../FoodCard/FoodCard';
import Popup from '../Popup/Popup';
import Loader from '../Loader/Loader';
import { AllMenuList } from '../AllMenuUseContext';


function SpecialDish(props) {

    const menuList = useContext(AllMenuList);

    const [popUp, setPopup] = useState(false);
    const [currentDish, setCurrentDish] = useState({});
    const [loading, setLoading] = useState(false)
    const [addToCartItem, setAddToCartItem] = useState([])

    // console.log(addToCartItem);

    let maxSpecialDishes = 8;

    let specialDishes = menuList.map((item, index) => {
        if (index < maxSpecialDishes) {
            return (
                <FoodCard setLoading={setLoading} setCurrentDish={setCurrentDish} item={item} setPopup={setPopup} />
            )
        }
    })

    return (
        <div className='container specialDishes'>
            {
                !loading ? popUp && <Popup setAddToCartItem={setAddToCartItem} currentDish={currentDish} setPopup={setPopup} /> : <Loader />

            }
            <div className="specialText">
                <h2>Special dishes</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, corporis esse? Consequatur illum odit deleniti voluptatem maxime sequi modi cum, recusandae assumenda</p>
            </div>
            <div className="dishesContainer">
                {specialDishes}
            </div>
        </div>
    )
}

export default SpecialDish