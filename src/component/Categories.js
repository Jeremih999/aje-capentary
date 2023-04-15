import React from "react";
import { FaBed, FaChair } from "react-icons/fa";
import { GiForkKnifeSpoon, GiSofa} from "react-icons/gi";
import { TbMoodKid} from "react-icons/tb";
import { MdDinnerDining } from "react-icons/md"

const Categories = () => {
    return (
        <div className="categories__container">

            <div className="categories__grid-container">

                <div className="categories-text">
                    <h1>Our Main Categories</h1><br />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. exercitationem nesciunt maiores eaque doloribus cumque quidem repellat. Eum laboriosam beatae voluptates exercitationem nesciunt maiores eaque doloribus cumque quidem repellat?</p><br />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum laboriosam beatae voluptates exercitationem nesciunt maiores eaque doloribus cumque quidem</p>
                </div>
                <div className="categories__images-container">
                    <div className="categories__images">
                        <div >
                            <FaBed style={{color : "#088F8F", height : "1rem"}} />
                            <h5>Bed Room</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                            <button className="action">veiw &rarr; </button>
                        </div>
                        <div>
                          <FaChair style={{color : "#A52A2A"}} />
                            <h5>OFFICES</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                            <button className="action">veiw</button>
                        </div>
                        <div>
                            <GiSofa style={{color : "#454B1B"}} />
                            <h5>Living Room</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                            <button className="action">veiw</button>
                        </div>
                        <div>
                            <TbMoodKid style={{color : "#AFE1AF"}} />
                            <h5>KIDS</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                            <button className="action">veiw</button>
                        </div>
                        <div>
                            <GiForkKnifeSpoon style={{color : "#EADDCA"}}/>
                            <h5>KITCHEN</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                            <button className="action">veiw</button>
                        </div>
                        <div>
                            <MdDinnerDining />
                            <h5>DINNING</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                            <button className="action">veiw</button>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Categories