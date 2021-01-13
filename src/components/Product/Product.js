import React from 'react';

const Product = ({title,name,price}) =>{
    return (
        <div>
            <h1>{title}</h1>
            <h2>{name}</h2>
            <span>{price}</span>
        </div>
    )
}

export default Product;