import React, { Suspense } from "react";
import ToggleBar from "./toggleBar"
import Item from "./item"
import Pagination from "../pagination/pagination"
const Products = ()=>{

    return(
        <>
        <div className="products">
        <span className="d-block fs-1 text-darkest-gray">Products </span>
        <ToggleBar/>
        <Item/>
        <Pagination/>

        </div>
        </>
    )
}

export default Products