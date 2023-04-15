import React from 'react';
import { FaFacebookF, FaInstagram, FaMailBulk, FaPhoneVolume, FaTwitter, FaVoicemail } from 'react-icons/fa';
import {MdLocationCity} from "react-icons/md"

const Contact = ()=>{
    return (
        <div className='contact-main__container'>
            <div className='contact__container'>
                <div className='contact-text'>
                    <div className='contact__text-inner'>
                        <div>
                            <img src='./img/contact.svg' alt='an icon' />
                        </div>
                        <h1>Contact Us</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum laboriosam beatae voluptates exercitationem </p>

                        <ul className='contact-info'>
                            <li><FaPhoneVolume />  08115367385</li>
                            <li><FaMailBulk /> Brown@gmail.com</li>
                            <li><MdLocationCity /> Edo State, Nigeria</li>
                            <li> <ul className='socials'>
                            <li><FaFacebookF /></li>
                            <li><FaTwitter /></li>
                            <li><FaInstagram /></li>
                            <li><FaPhoneVolume /></li>
                        </ul></li>
                        </ul>

                       
                    </div>
                </div>

            <div className='contact-form'>
                    <form>
                        <div className='input__fields-names'>
                            <input type='text' placeholder='John' name="firstName" />
                            <input type='text' placeholder='Doe' name="lastName" />
                        </div>
                        <div className='form-control'>
                            <input type='email' placeholder='johndoe@gmail.com' name='email' />
                        </div>
                        <div className='form-control'>
                            <textarea rows='12' name='desc' placeholder='Enter your Message'></textarea>
                        </div>
                        <button type='submit' >Submit</button>
                    </form>
            </div>
                
            </div>
        </div>
       
    )
}

export default Contact