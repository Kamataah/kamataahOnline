import { Link } from "react-router-dom"
import { scrollToElement } from "../../../Utils"

function Header() {
    return (
        <header className="main_menu home_menu header-area">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-11">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link to="/" className="navbar-brand"> <img src="/assets/img/combo.png" alt="logo" /> </Link>
                            <button className="navbar-toggler d-none" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="menu_icon"><i className="fas fa-bars"></i></span>
                            </button>

                            <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to={'/'} className="nav-link">Home</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" id="navbarDropdown_1"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Shop
                                        </Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                                            <Link className="dropdown-item" onClick={() => { scrollToElement('category') }}> shop category</Link>
                                            <Link className="dropdown-item" onClick={() => { scrollToElement('products') }}>product details</Link>

                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" onClick={() => { scrollToElement('about') }}>About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" onClick={() => { scrollToElement('footer') }}>Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
