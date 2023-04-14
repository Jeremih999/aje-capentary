import React from "react";

const Headers = ()=>{
    return (
        <header>
           <div className="header-text">
            <h1><span>DESIGN</span> YOUR <br /> COMFORT ZONE</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum laboriosam beatae voluptates exercitationem nesciunt maiores eaque doloribus cumque quidem repellat?</p>
            <button>Shop Now</button>
           </div>
           <div className="header-img__container">
               <div className="img-1">
                <img src="./img/one.jpg" alt="pic1"/>
               </div>
               <div className="img-2">
                <img src="./img/two.jpg" alt="pic2"/>
               </div>
               <div className="img-3">
                <img src="./img/three.jpg" alt="pic3"/>
               </div>
           </div>
        </header>
    )
}

export default Headers