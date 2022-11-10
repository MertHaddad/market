import React from "react";
import ToggleBar from "./toggleBar"
import Item from "./item"
import Pagination from "../pagination"
const Products = ()=>{

    return(
        <>
        <div className="products">
        <h5>products </h5>
        <ToggleBar/>
        <Item/>
        <Pagination/>
        </div>
        </>
    )
}

export default Products