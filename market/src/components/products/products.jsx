import React, { Suspense } from "react";
import ToggleBar from "./toggleBar"
import Item from "./item"
import Pagination from "../pagination/pagination"
import Spinner from "../spinner";
const Products = ()=>{

    return(
        <>
        <div className="products">
        <span className="d-block fs-1 text-bold text-darkest-gray">Products </span>
        <ToggleBar/>
        <Suspense fallback={<Spinner/>} >
        <Item/>
        {/* <Pagination/> */}

        </Suspense>
        </div>
        </>
    )
}

export default Products