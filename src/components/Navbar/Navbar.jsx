import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const Navbar = () => {
    // navegation of the website
    return (
        <div className="header_area">
            <div className="main-menu">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <NavLink className="navbar-brand" to="/webapp">
                        Github-Bryan
                    </NavLink>
                    <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="mr-auto"></div>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/webapp" >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/portfolio" >
                                    Portofolio
                                </NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/about-me" >
                                    About-Me
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
