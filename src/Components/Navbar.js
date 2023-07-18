import React from "react";
import logo from "../images/logo.svg";
import bell from "../images/bell.svg";
import user from "../images/user.svg";

function Navbar() {
    return (
        <div className="navbar">
            <img alt="Logo" className="logo " src={logo} />
            <div className="nav--buttons">
                <div className="nav--button bell">
                    <img alt="Bell" src={bell} />
                </div>
                <div className="nav--button">
                    <img alt="User" src={user} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
