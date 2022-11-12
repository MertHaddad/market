import React, { Suspense } from "react";
import ToggleBar from "./toggleBar"
import Item from "./item"
import Pagination from "../pagination/pagination"
const Products = ()=>{

    return(
        <>
        <div className="products">
        <span className="d-block fs-2">products </span>
        <ToggleBar/>
        <Item/>
        <Suspense fallback="..." >
        <Pagination/>

        </Suspense>
        </div>
        </>
    )
}

export default Products