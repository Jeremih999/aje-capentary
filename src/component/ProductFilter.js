import React from "react"

const ProductFilter = () => {
    return (
        <div className="products-container">
            <div className="products-filter">
                <input type="text" className="search-product" placeholder="Search Products" />
                <div className="select-filter">
                    <select>
                        <option active>OFFICES</option>
                        <option>LIVING ROOM</option>
                        <option>KITCHEN</option>
                        <option>BED ROOM</option>
                        <option>SCHOOL</option>
                        <option>OTHERS</option>
                    </select>
                    <select>
                        <option active>PRICE RANGE</option>
                        <option>LOWEST</option>
                        <option>HIGHEST</option>
                    </select>
                    <select>
                        <option active>COLORS</option>
                        <option>BLACK</option>
                        <option>WHITE</option>
                        <option>GREEN</option>
                        <option>BLUE</option>
                        <option>OTHERS</option>
                    </select>
                </div>

            </div>
        </div>
    )
}

export default ProductFilter