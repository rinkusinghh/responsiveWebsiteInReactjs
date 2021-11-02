import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="_navbarBg navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand _navbarText" to="/">Programmer</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                                        <li className="nav-item">
                                            <NavLink  exact activeClassName="_listActive" className="_navAnchor nav-link " aria-current="page" to="/">home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="_listActive" className="_navAnchor nav-link" to="/about">about</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="_listActive" className="_navAnchor nav-link" to="/services">services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="_listActive" className="_navAnchor nav-link" to="/contact">contact</NavLink>
                                        </li>
                                       
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
