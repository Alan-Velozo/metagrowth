import "./NavbarStyles.css";

import {Link} from "react-router-dom"
import { MenuItems } from "./MenuItems";
import { useState } from "react";

import Logo from "../assets/metagrowth.svg"
import LogoActive from "../assets/logo-active.svg"


export function Navbar(){

    const [clicked, setClicked] = useState(false);
    
    function handleClick() {
        setClicked(!clicked);
    }

    return <nav className="navbar-items">
        <a href="#" aria-hidden="true">
            <img src={clicked ? LogoActive : Logo} alt="Logo" className={clicked ? "navbar-logo active" : "navbar-logo"}></img>
        </a>

        <div className="menu-icon" onClick={handleClick}>
            <i className={clicked ? "fas fa-times" : "fa-solid fa-bars"}></i>
        </div>

        <ul className={clicked ? "navbar-menu active" : "navbar-menu"}>
            {MenuItems.map(function(item){
                return <li key={item.id}>
                    <Link className={item.cName} to={item.url}>
                        <i className={item.icon}></i>{item.title}
                    </Link>
                </li>
            })}
        </ul>

    </nav>
}