import React from "react";
import './BreadCrumps.css';
import arrow_icon from '../Component/Assets/breadcrum_arrow.png'

export const BreadCrumps = (props)=>{
    const {product} = props;
    return(
        <div className='breadcrump'>
            HOME <img src={arrow_icon}/> SHOP <img src={arrow_icon}/>{product.category} <img src={arrow_icon}/> {product.name}
        </div>
    )
}