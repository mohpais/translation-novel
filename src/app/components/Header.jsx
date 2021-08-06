import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'assets/styles/header.css';
import logo from 'assets/images/logo2.png';

function Header() {
    const toggleTheme = () => {
        return
    }
    return (
        <div className="container-fluid bg-white shadow">
            <div className="row py-2">
                <a className="col-auto">
                    <img src={logo} alt="my-logo" height="40" />
                </a>
                <div className="col-auto my-auto font-weight-6">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                <span>Novel Hot</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                <span>Rekomendasi Novel</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                <span>Genre Novel</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-auto ml-auto">
                    <form> 
                        <div className="input-group-custom">
                            <input id="search" type="text" className="form-control-custom" placeholder="Pencarian..." name="search" autoComplete="off" />
                            {/* <select className="form-control-custom">
                                <option value="" disabled>-- Type Novel --</option>
                                <option value="0">Web Novel (WN)</option>
                                <option value="1">Light Novel (LN)</option>
                            </select>  */}
                            <button type="submit" className="btn-custom" id="submit">
                                <FontAwesomeIcon icon={["fa", "search"]} />
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-auto my-auto">
                    <div className="d-flex">
                        {/* <label id="switch" className="switch">
                            <input type="checkbox" onChange={toggleTheme()} id="slider" />
                            <span className="slider round"></span>
                        </label> */}
                        <button className="btn b-none font-14 text-dark mr-2">
                            <FontAwesomeIcon icon={["fa", "bookmark"]} />
                        </button>
                        <button className="btn b-none font-14 text-dark">
                            <FontAwesomeIcon icon={["fa", "user"]} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
