import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
            <div className="container-fluid">
                {/* Left-aligned items */}
                <div className="d-flex align-items-center">
                    <Link className="navbar-brand me-4" to="#">
                        Navbar
                    </Link>

                    {/* Navbar Links */}
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right-aligned authentication links */}
                <div className="d-flex">
                    <Link className="btn btn-outline-light ms-2" to="/login">Login</Link>
                    <Link className="btn btn-outline-light ms-2" to="/signup">Signup</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;