import React, { useState } from 'react'
import './menu.css'
import { useEffect } from 'react';
import Hero from '../Hero/Hero';
import TopBar from '../TopBar/TopBar';
import SpecialDish from '../SpecialDish/SpecialDish';
import DishCategory from '../DishCategory/DishCategory';
import { MDBSpinner } from 'mdb-react-ui-kit';
import Loader from '../Loader/Loader';


function Menu() {

    const [menu, setMenu] = useState([]);
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [beefItems, setBeefItems] = useState(true);

    const URL_ALL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c';
    const URL_CATEGORY = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    const BEEF_ITEM = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';

    const fetchAllData = async () => {
        const response = await fetch(URL_ALL);
        const data = await response.json();
        setMenu(data.meals)
    }
    const fetchCategoryData = async () => {
        const response = await fetch(URL_CATEGORY);
        const data = await response.json();
        setCategory(data.categories)
    }
    const fetchBeefItems = async () => {
        const response = await fetch(BEEF_ITEM);
        const data = await response.json();
        // console.log(data.meals);
        setBeefItems(data.meals)
        setLoading(false)
    }

    useEffect(() => {
        fetchAllData();
        fetchCategoryData();
        fetchBeefItems();
    }, [])

    let menuItems = menu.map((item) => {
        return (

            <div className='itemContainer'>
                <img src={item.strMealThumb} alt="" />
                <h3>{item.strMeal}</h3>
            </div>

        )
    })

    return (
        <div>
            <TopBar />
            <Hero />
            {!loading ?
                <div>
                    <SpecialDish menu={menu} />
                    <DishCategory category={category} beefItems={beefItems} />
                </div> :
                <Loader/>
            }
        </div>
    )
}

export default Menu