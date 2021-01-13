import React from 'react';

import Product from '../../components/Product/Product';
import {productsData} from '../../data-mockup/products-mockup';

import './Products.scss'

class Products extends React.Component  {
    render() {
        return (
            <div className = "products">
                {productsData.map(el =>{
                    return <Product key = {el.id} title = {el.title} name = {el.name} price = {el.price} />
                })}
            </div>
        )
    }

}

export default Products;