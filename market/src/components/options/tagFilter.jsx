import React from "react";
import { useSelector } from "react-redux";

const TagsFilter = ()=>{
    const selectTags= useSelector(state=>state.allProducts.tags)

    return(
        <>
        <span>Filter </span>
        <div className="filter-container">

        {selectTags.map(brand=>
        <div>
        <label htmlFor={brand}>{brand}</label>
        <input type="checkbox" name="" id={brand} />
        </div>
            
            )}
            </div>
        </>
    )
}

export default TagsFilter