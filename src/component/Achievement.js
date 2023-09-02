import React from "react";

const Achievement = ()=>{
    return (
        <div className="achievement-container">
           <div className="achievement-grid">
              <div className="img-container">
                 <img src="./img/achievements.svg" alt="Achievement" />
              </div>
              <div className="achievement-text">
                <h1>Our Achievements</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. exercitationem nesciunt maiores eaque doloribus cumque quidem repellat. Eum laboriosam beatae voluptates exercitationem nesciunt maiores eaque doloribus cumque quidem repellat?</p>
                {/* <div className="Achievement-list">*/}
                    {/* <div>
                        <h2>Our Sales</h2>
                        <p>over 2000</p>
                    </div>
                    <div>
                        <h2>Affliate Companies</h2>
                        <p>30 Companies</p>
                    </div>
                    <div>
                        <h2>Our Stores</h2>
                        <p>We have 50 STORES</p>
                        <p>Across all STATES</p>
                    </div>
                </div> */} 
                <h1>This is some of our Achievements</h1>
                <ul>
                    <li>Since Launch we have made over 2000 sales</li>
                    <li>We have over 30 Affliate Companies</li>
                    <li>We are 2 times BEST CARPENTER AWARD company</li>
                </ul>
              </div>
           </div>
        </div>
    )
}

export default Achievement