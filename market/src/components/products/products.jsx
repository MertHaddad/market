import React from "react";
import ToggleBar from "./toggleBar"
import Item from "./item"
import Pagination from "../pagination"
const Products = ()=>{

    return(
        <>
        <div className="products">
        <span className="d-block fs-2">products </span>
        <ToggleBar/>
        <Item/>
        <Pagination/>
        </div>
        </>
    )
}

export default Products