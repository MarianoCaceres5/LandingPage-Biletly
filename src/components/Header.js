import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import '../style.css'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg fixed">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Link style={{textDecoration: 'none'}} to="/home" className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="" width="50" height="auto" />
                        </a>
                        <span style={{color: 'white', }} className="navbar-brand h1">Biletly</span>
                    </Link>
                    <ul className="d-flex align-items-center navbar-nav">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link">
                                <p>Home</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                <p>About</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tutorial" className="nav-link">
                                <p>Tutorial</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">
                                <p>Contact</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
