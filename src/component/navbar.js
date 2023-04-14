import React from "react";

const NavBar = ()=>{
    return <nav>
         <ul>
            <li>Logo</li>

            <li>
                <ul className="main-links">
                    <li>Home</li>
                    <li>Product</li>
                    <li>About</li>
                </ul>
            </li>
            
            <li>
                <ul className="action-links">
                    <li>Cart</li>
                    <li>Login</li>
                    {/* <li>Logout</li> */}
                </ul>
            </li>
         </ul>
    </nav>
}

export default NavBar