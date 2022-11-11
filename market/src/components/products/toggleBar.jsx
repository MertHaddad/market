import React from "react";
import { useDispatch } from "react-redux";
import { getItems } from "../../features/counter/productSlice";
import { addQuery, removeQuery } from "../../features/counter/querySlice";

const ToggleBar = ()=>{
    const dispatch = useDispatch()
    
    return(
        <>
        <button onClick={()=>{dispatch(addQuery("itemType=mug"));dispatch(getItems())}}>mug</button>
        <button onClick={()=>{dispatch(addQuery("itemType=shirt"));dispatch(getItems())}} >shirt</button>
        </>
    )
}

export default ToggleBar