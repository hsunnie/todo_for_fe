import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Nav.css'

import logoimg from "../img/Size=Large.png";

const Nav = () => {
    const {pathname} = useLocation();
    return (
        <div>
            <div className="logo">
                <Link className={pathname === '/' ? 'active' : ''} to={'/'}>
                    <img className="logoimg" src={logoimg} alt="Logo" />
                </Link>
            </div>
        </div>
    );
}

export default Nav