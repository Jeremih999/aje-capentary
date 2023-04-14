import React from "react";

const About = ()=>{
    return (
       <div className="about__container">
        <h1>About Aje Capentary Company</h1>
        <div className="about__container-grid">
            <div className="about__text-container">
                <h2>Lorem ipsum dolor, sit amet consectetur</h2>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum laboriosam beatae voluptates exercitationem nesciunt maiores eaque doloribus cumque quidem repellat?
                </p>

                <h2>Lorem ipsum dolor, sit amet consectetur</h2>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum laboriosam beatae voluptates exercitationem nesciunt maiores eaque doloribus cumque quidem repellat. Eum laboriosam beatae voluptates exercitationem nesciunt maiores eaque doloribus cumque quidem repellat?
                </p>
                <a href="#" className="learn-more">Learn More &rarr; </a>
            </div>
            <div className="photo__composition">
                 <div className="p1 photo">
                    <img src="./img/one.jpg" alt="photo 1" />
                 </div>
                 <div className="p2 photo">
                    <img src="./img/four.jpg" alt="photo 2" />
                 </div>
                 <div className="p3 photo">
                    <img src="./img/two.jpg" alt="photo 3" />
                 </div>
            </div>
        </div>
       </div>
    )
}

export default About