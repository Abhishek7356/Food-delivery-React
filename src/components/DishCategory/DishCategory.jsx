import React, { useEffect, useState } from 'react'
import { MDBSpinner } from 'mdb-react-ui-kit';
import './DishCategory.css'

function DishCategory(props) {

    const [categoryItem, setCategoryItem] = useState([])
    const [active, setActive] = useState('Beef')
    const [defaultItem, setDefaultItem] = useState(true)
    const [loading, setLoading] = useState(false);


    const handleCategory = async (category) => {
        setActive(category)
        // one way filter 

        // let categoryItems = props.menu.filter((item) => {
        //     return item.strCategory == category
        // }).map((item) => {
        //     return (
        //         <div className='itemContainer'>
        //             <img src={item.strMealThumb} alt="" />
        //             <h3>{item.strMeal}</h3>
        //         </div>
        //     )
        // })

        // second way another api fetch

        setDefaultItem(false)
        setLoading(true)
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        let data = await response.json();
        setLoading(false)
        let listcategoryItems = data.meals.map((item) => {
            return (
                <div className='itemContainer'>
                    <img src={item.strMealThumb} alt="" />
                    <h3>{item.strMeal}</h3>
                </div>
            )
        })
        setCategoryItem(listcategoryItems)
        // console.log(categoryItem);
    }

    let beefDetails = props.beefItems.map((item) => {
        return (
            <div className='itemContainer'>
                <img src={item.strMealThumb} alt="" />
                <h3>{item.strMeal}</h3>
            </div>
        )
    })


    let categoryDishes = props.category.map((item) => {
        return (
            <p id={active == item.strCategory ? 'active' : ''} onClick={() => handleCategory(item.strCategory)} className='categoryItem shadow'>{item.strCategory}</p>
        )
    })

    return (
        <div>
            <div className="outerContainer container">
                <div className="categoryHead">
                    <h2>Choose your category</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi recusandae tenetur error eaque asperiores rem possimus! Veritatis fugit provident</p>
                </div>
                <div className="dishCategory">
                    {categoryDishes}
                </div>
                <div className="dishesContainer">
                    {defaultItem ? beefDetails :
                        !loading ?
                            categoryItem.length != 0 ? categoryItem :
                                <div className='alertMsg'>
                                    <div className='alerting shadow'>
                                        <h5>Sorry, There is no item to show !</h5>
                                        <h6>Please, Try another category</h6>
                                    </div>
                                </div>
                            :
                            <div className='loading'>
                                <MDBSpinner role='status' className='me-2' color='warning'>
                                    <span className='visually-hidden'>Loading...</span>
                                </MDBSpinner>Loading...
                            </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default DishCategory