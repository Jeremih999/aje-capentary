import React from 'react';

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
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum laboriosam beatae voluptates exercitationem nesciunt maiores eaque doloribus cumque quidem repellat?</p>

                        <ul>
                            <li>08115367385</li>
                            <li>Brownjeremih9@gmail.com</li>
                            <li>Edo State, Nigeria</li>
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