import React from "react";
import { FaBed, FaChair } from "react-icons/fa";

const Categories = () => {
    return (
        <div className="categories__container">

            <div className="categories__grid-container">

                <div className="categories-text">
                    <h1>Our Main Categories</h1><br />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum laboriosam beatae voluptates exercitationem nesciunt maiores eaque doloribus cumque quidem repellat. Eum laboriosam beatae voluptates exercitationem nesciunt maiores eaque doloribus cumque quidem repellat?</p><br />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum laboriosam beatae voluptates exercitationem nesciunt maiores eaque doloribus cumque quidem</p>
                </div>
                <div className="categories__images-container">
                    <div className="categories__images">
                        <div >
                            <FaBed />
                            <h5>Bed Room</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum laboriosam beatae voluptates </p>
                            <button className="action">veiw </button>
                        </div>
                        <div>
                          <FaChair />
                            <h5>OFFICES</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum laboriosam beatae voluptates </p>
                            <button className="action">veiw</button>
                        </div>
                        <div>
                            <GiSofa />
                            <h5>Living Room</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum laboriosam beatae voluptates </p>
                            <button className="action">veiw</button>
                        </div>
                        <div>
                            <h5>KIDS</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum laboriosam beatae voluptates </p>
                            <button className="action">veiw</button>
                        </div>
                        <div>
                            <h5>KITCHEN</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum laboriosam beatae voluptates </p>
                            <button className="action">veiw</button>
                        </div>
                        <div>
                            <h5>DINNING</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum laboriosam beatae voluptates </p>
                            <button className="action">veiw</button>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Categories