import React from "react";
import { useEffect, useState } from React;
import { ReactDOM } from "react-router-dom";

function ProductsList(props) {
    const { products } = props;
    return (
        <div>
            {
                products.length ? products.map((eachProduct, idx) =>{
                    return <createPost eachProduct={eachProduct} idx={idx}/>
                }):<div>no products yet!</div>
            }
        </div>
    )
}

export default ProductsList;