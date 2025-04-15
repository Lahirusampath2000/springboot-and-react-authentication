import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isAuthenticated, handleLogout }) => {
    const navigate = useNavigate();
    
    const handleLogoutClick = () => {
        handleLogout();
        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <Link className="navbar-brand me-4" to="#">
                        Navbar
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="d-flex">
                    {isAuthenticated ? (
                        <button 
                            className="btn btn-outline-light ms-2" 
                            onClick={handleLogoutClick}
                        >
                            Logout
                        </button>
                    ) : (
                        <>
                            <Link className="btn btn-outline-light ms-2" to="/login">Login</Link>
                            <Link className="btn btn-outline-light ms-2" to="/signup">Signup</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;