
import React, { createContext, useState, useEffect } from 'react'
import Loader from './Loader/Loader';

export const AllMenuList = createContext();

function AllMenuUseContext(props) {

    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    const URL_ALL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c';

    const fetchAllData = async () => {
        const response = await fetch(URL_ALL);
        const data = await response.json();
        setMenu(data.meals)
        setLoading(false)
    }
    useEffect(() => {
        fetchAllData();
    }, [])


    return (
        
        <AllMenuList.Provider value={menu} >
            {!loading ? props.children : <Loader/>}
        </AllMenuList.Provider>
    )
}

export default AllMenuUseContext