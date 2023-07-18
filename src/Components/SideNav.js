import React from "react";
import home from "../images/home.svg";
import columns from "../images/columns.svg";
import users from "../images/users.svg";
function SideNav() {
    return (
        <div className="sidenav">
            <div className="sidenav--buttons">
                <div className="sidenav--button">
                    <img alt="Home" className="sidenav--img" src={home} />
                    <p>Home</p>
                </div>
                <div className="sidenav--button">
                    <img alt="Columns" className="sidenav--img" src={columns} />
                    <p>Manage</p>
                </div>
                <div className="sidenav--button">
                    <img alt="Users" className="sidenav--img" src={users} />
                    <p>Beneficiaries</p>
                </div>
            </div>
            <div className="send--money">
                <p>Send Money</p>
            </div>
        </div>
    );
}

export default SideNav;
