import React, { useContext, useState } from 'react'
import './menu.css'
import { useEffect } from 'react';
import Hero from '../Hero/Hero';
import TopBar from '../TopBar/TopBar';
import SpecialDish from '../SpecialDish/SpecialDish';
import DishCategory from '../DishCategory/DishCategory';
import Loader from '../Loader/Loader';
import AllMenuUseContext, { AllMenuList } from '../AllMenuUseContext';
import AddToCartIcon from '../AddToCartIcon/AddToCartIcon';


function Menu() {

    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [beefItems, setBeefItems] = useState(true);
    const [cartMenuShow, setCartMenuShow] = useState(false)
    const [toShowCartCard, setToShowCartCard] = useState([])

    console.log(cartMenuShow);

    const menu = useContext(AllMenuList)

    const URL_CATEGORY = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    const BEEF_ITEM = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';


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
        fetchCategoryData();
        fetchBeefItems();
    }, [])

    // let menuItems = menu.map((item) => {
    //     return (

    //         <div className='itemContainer'>
    //             <img src={item.strMealThumb} alt="" />
    //             <h3>{item.strMeal}</h3>
    //         </div>

    //     )
    // })

    return (
        <div>
            <TopBar />
            <Hero />
            <AddToCartIcon />
            <AllMenuUseContext>
                {!loading ?
                    <div>
                        <SpecialDish cartMenuShow={cartMenuShow} setCartMenuShow={setCartMenuShow}/>
                        <DishCategory category={category} beefItems={beefItems} />
                    </div> :
                    <Loader />
                }
            </AllMenuUseContext>
        </div>
    )
}

export default Menu