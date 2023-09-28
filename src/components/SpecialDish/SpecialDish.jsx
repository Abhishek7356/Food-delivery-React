import React, { useState } from 'react'
import './specialDish.css'
import FoodCard from '../FoodCard/FoodCard';
import Popup from '../Popup/Popup';
import Loader from '../Loader/Loader';

function SpecialDish(props) {

    const [popUp, setPopup] = useState(false);
    const [currentDish, setCurrentDish] = useState({});
    const [loading, setLoading] = useState(false)

    // console.log(currentDish);

    let maxSpecialDishes = 8;

    let specialDishes = props.menu.map((item, index) => {
        if (index < maxSpecialDishes) {
            return (
                <FoodCard setLoading={setLoading} setCurrentDish={setCurrentDish} item={item} setPopup={setPopup} />
            )
        }
    })

    return (
        <div className='container specialDishes'>
            {
                !loading ? popUp && <Popup currentDish={currentDish} setPopup={setPopup} /> : <Loader />

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