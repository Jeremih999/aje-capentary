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
               <div>
                <img src="./img/head1.jpg" alt="pic1"/>
               </div>
               <div>
                <img src="./img/head2.jpg" alt="pic2"/>
               </div>
               <div>
                <img src="./img/head3.jpg" alt="pic3"/>
               </div>
           </div>
        </header>
    )
}

export default Headers