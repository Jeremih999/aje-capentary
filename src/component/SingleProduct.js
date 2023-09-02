import React from "react";

const SingleProduct = ()=>{
    return (
         <div className="single-product__page">
           <div className="product-gallery">
               <button>Go Back To Products Page</button>
                <div className="main-img">
                <img src="./img/one.jpg" alt="main image" />
                </div>
                <div className="related-product__images">
                <div>
                    <img src="./img/one.jpg" alt="related image" />
                </div>
                <div>
                    <img src="./img/five.jpg" alt="related image" />
                </div>
                <div>
                    <img src="./img/six.jpg" alt="related image" />
                </div>
                <div>
                    <img src="./img/seven.jpg" alt="related image" />
                </div>
                </div>
           </div>

           <div className="product-details">
               <h1>Two seater Sofa Chair</h1>
               <h2>$ 90.45</h2>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum laboriosam beatae voluptates exercitationem nesciunt maiores eaque doloribus cumque quidem repellat?
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum laboriosam beatae voluptates exercitationem nesciunt maiores eaque doloribus cumque quidem repellat?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum laboriosam beatae voluptates exercitationem nesciunt maiores eaque doloribus cumque quidem repellat?</p>
               <ul>
                <li><span>Availability :</span> In Stock</li>
                <li><span>Free Delivery :</span> Only In Benin City</li>
                <li><span>colors :</span> <div className="color" style={{background : "black"}}>~</div> <div className="color" style={{background : "brown"}}>~</div></li>
               </ul>
               <div className="order"> - <h1>1</h1> +</div>
               <button>ADD TO CART</button>
           </div>
        </div>
    )
}

export default SingleProduct