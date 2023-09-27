import React from 'react'
import './specialDish.css'

function SpecialDish(props) {
 
    let maxSpecialDishes = 8;

    let specialDishes = props.menu.map((item, index) => {
        if (index < maxSpecialDishes) {
            return (
                <div className='itemContainer'>
                    <img src={item.strMealThumb} alt="" />
                    <h3>{item.strMeal}</h3>
                </div>
            )
        }
    })

    return (
        <div className='container specialDishes'>
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