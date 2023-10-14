import React, { useContext, useState } from 'react'
import './menu.css'
import { useEffect } from 'react';
import Hero from '../Hero/Hero';
import TopBar from '../TopBar/TopBar';
import SpecialDish from '../SpecialDish/SpecialDish';
import Loader from '../Loader/Loader';
import AppContext, { DispatchContext } from '../../context/AppContext';


function Menu() {

    const [loading, setLoading] = useState(true);

    const URL_CATEGORY = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    const BEEF_ITEM = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';

    const dispatch = useContext(DispatchContext)

    const fetchCategoryData = async () => {
        const response = await fetch(URL_CATEGORY);
        const data = await response.json();
        dispatch({ type: 'categoryItems', payload: data.categories })

    }
    const fetchBeefItems = async () => {
        const response = await fetch(BEEF_ITEM);
        const data = await response.json();
        dispatch({ type: 'beefItems', payload: data.meals })
        setLoading(false)
    }

    const fetchAllData = async () => {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c');
        const data = await response.json();
        dispatch({ type: 'allData', payload: data.meals })
        setLoading(false)
    }

    useEffect(() => {
        fetchAllData();
        fetchCategoryData();
        fetchBeefItems();
    }, [])

    return (
        <div>
            <TopBar />
            <Hero />
                {!loading ?
                    <div>
                        <SpecialDish />
                    </div> :
                    <Loader />
                }
        </div>
    )
}

export default Menu