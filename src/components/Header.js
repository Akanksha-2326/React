import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    // let loginBtn = "Login";

    const [loginBtn, setLoginBtn] = useState("Login");

    return(
        <div className="header">
            <div className="logo-container"> 
                <img className="logo" src={LOGO_URL} ></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                         loginBtn === "Login" ? 
                            setLoginBtn("Logout")
                            : setLoginBtn("Login");
                    }
                       
                    }>{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;