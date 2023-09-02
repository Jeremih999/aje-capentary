import React from "react"
import products from "../products"
import { BsCartFill, BsEyeFill } from "react-icons/bs"
import {Link} from "react-router-dom"

import Masonry from 'react-masonry-css'


const Products = () => {

    return (
        <div className="products-image-container">
            <div className="products-grid">
                <Masonry
                    breakpointCols={3}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {products.map((card) => {
                        return <div className="card">
                             <div className= "show-add-to-cart">
                             <BsCartFill className="icon-style" />
                            <Link to="/product-details"><BsEyeFill className="icon-style" /></Link> 
                             </div>
                            <img src={card.image} alt="product image" />
                            <div className="product-details">
                                <div> <h3>{card.name}</h3> </div>
                                <div> <p>$ {card.price}</p> </div>
                            </div>
                        </div>
                    })}
                </Masonry>
            </div>
        </div>
    )
}

export default Products