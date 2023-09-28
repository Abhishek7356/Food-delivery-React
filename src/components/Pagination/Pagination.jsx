import React, { useEffect, useState } from 'react'
import './Pagination.css'

function Pagination(props) {

    const [active, setActive] = useState(props.currentPage)

    let numberOfPage = [];
    for (let i = 1; i <= Math.ceil(props.categoryItems.length / props.itemPerPage); i++) {
        numberOfPage.push(i);
    }

    const handlePagination = (e, checkItem) => {
        setActive(checkItem);
        let showThisPage = e.target.id;
        props.setCurrentPage(showThisPage)
    }

    let pages = numberOfPage.map((value, index) => {
        return (
            <span id={index + 1} onClick={(e) => handlePagination(e, index + 1)} className={active == index + 1 ? 'activePage' : null}>{index + 1}</span>
        )
    })

    return (
        <div>
            <div className="pagesContainer">
                {pages}
            </div>
        </div>
    )
}

export default Pagination