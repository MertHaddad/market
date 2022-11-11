import React from "react";
import { useSelector } from "react-redux";

const BrandFilter = ()=>{
    const selectBrand= useSelector(state=>state.brand.value)
    
    return(
        <>
        <span>Filter </span>
        <div className="filter-container p-4">

        {selectBrand.map(brand=>
        <div>
        <input type="checkbox" name="" id={brand.name} />
        <label htmlFor={brand.name}>{brand.name}</label>
        </div>
            
            )}
            </div>
        </>
    )
}

export default BrandFilter