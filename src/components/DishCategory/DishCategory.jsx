import React, { useEffect, useState } from 'react'
import { MDBSpinner } from 'mdb-react-ui-kit';
import './DishCategory.css'
import Pagination from '../Pagination/Pagination';
import FoodCard from '../FoodCard/FoodCard';
import Popup from '../Popup/Popup';
import Loader from '../Loader/Loader';


function DishCategory(props) {

    const [categoryItem, setCategoryItem] = useState([])
    const [active, setActive] = useState('Beef')
    const [defaultItem, setDefaultItem] = useState(true)
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemPerPage, setItemPerPage] = useState(4)
    const [popUp, setPopup] = useState(false);
    const [currentDish, setCurrentDish] = useState({});


    let pageLastIndex = currentPage * itemPerPage;
    let pageFirstIndex = pageLastIndex - itemPerPage;

    let itemToShow = categoryItem.slice(pageFirstIndex, pageLastIndex);

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
        setCurrentPage(1)
        setDefaultItem(false)
        setLoading(true)
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        let data = await response.json();
        console.log(data);
        setLoading(false)
        let listcategoryItems = data.meals.map((item) => {
            return (
                <FoodCard item={item} setLoading={setLoading} setCurrentDish={setCurrentDish} setPopup={setPopup} />
            )
        })
        setCategoryItem(listcategoryItems)
        // console.log(categoryItem);
    }

    let beefDetails = props.beefItems.map((item) => {
        return (
            <FoodCard item={item} setCurrentDish={setCurrentDish} setLoading={setLoading} setPopup={setPopup} />
        )
    })

    useEffect(() => {
        if (defaultItem) {
            setCategoryItem(beefDetails)
        }
    }, [])


    let categoryDishes = props.category.map((item) => {
        return (
            <p id={active == item.strCategory ? 'active' : ''} onClick={() => handleCategory(item.strCategory,item.idMeal)} className='categoryItem shadow'>{item.strCategory}</p>
        )
    })

    return (
        <div>
            {popUp && <Popup currentDish={currentDish} setPopup={setPopup} />}
            <div className="outerContainer container">
                <div className="categoryHead">
                    <h2>Choose your category</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi recusandae tenetur error eaque asperiores rem possimus! Veritatis fugit provident</p>
                </div>
                <div className="dishCategory">
                    {categoryDishes}
                </div>
                <div className="dishesContainer">
                    {defaultItem ? itemToShow :
                        !loading ?
                            categoryItem.length != 0 ? itemToShow :
                                <div className='alertMsg'>
                                    <div className='alerting shadow'>
                                        <h5>Sorry, There is no item to show !</h5>
                                        <h6>Please, Try another category</h6>
                                    </div>
                                </div>
                            : <Loader/>
                    }
                </div>
            </div>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} itemPerPage={itemPerPage} categoryItems={categoryItem} />
        </div>
    )
}

export default DishCategory