import React, {useState} from "react";
import { BiLogIn } from "react-icons/bi"
import { BsCartFill } from "react-icons/bs"
import { GoThreeBars } from "react-icons/go"
import { FaTimes } from "react-icons/fa"
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [nav, setNav] = useState(false);

    function openNav() {
       setNav(true)
    }
 
    function closeNav() {
       setNav(false)
    }

    console.log(nav)
    return <nav>
        <div className="nav-container">
            <ul>
            <NavLink to='/' style ={{textDecoration : 'none', color: "#000"}} onClick={closeNav}>
                <li>Logo</li>
            </NavLink>
            </ul>
            <ul className={nav ? "main-links main-links_active" : "main-links"}>
            <NavLink to='/' className={({isActive}) => (isActive ? "active-link" : "not-active")} style ={{textDecoration : 'none', color: "#000"}} onClick={closeNav}>
                <li>Home</li>
            </NavLink>
            <NavLink to='/products' className={({isActive}) => (isActive ? "active-link" : "not-active")} style ={{textDecoration : 'none', color: "#000"}} onClick={closeNav}>
                <li>Product</li>
            </NavLink>
            <NavLink to='/about' className={({isActive}) => (isActive ? "active-link" : "not-active")} style ={{textDecoration : 'none', color: "#000"}} onClick={closeNav}>
                <li>About</li>
            </NavLink>
            </ul>
            <ul>
                <li>
                    <ul className="action-links">
                    <NavLink to='/cart' className={({isActive}) => (isActive ? "active-link" : "not-active")} style ={{textDecoration : 'none', color: "#000"}}>
                        <li><BsCartFill /></li>
                        </NavLink>
                        <li><BiLogIn /></li>
                        {/* <li>Logout</li> */}
                        <div className="navbar-action-btns">
                            {nav ? <li><FaTimes onClick={closeNav} /></li> : <li><GoThreeBars onClick={openNav} /></li>}
                        </div>
                    </ul>
                </li>
            </ul>
        </div>

    </nav>
}

export default NavBar