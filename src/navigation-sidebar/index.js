import React from "react";
import {useParams} from "react-router";
import {useSelector} from "react-redux";

const NavigationSidebar = () => {
    let {active} = useParams();

    const details = useSelector(state => state.user)
    const userType = details.user.type

    return (<div className="list-group">
        <a className={`list-group-item
                    ${!active || active === 'home' ? 'active' : ''}`}
           href="/">
            <i className="bi bi-house-door-fill"></i>
            <span className="d-none d-lg-inline"> Home</span>
        </a>
        <a className={`list-group-item
                    ${active === 'search' ? 'active' : ''}`}
           href="/search">
            <i className="bi bi-search"></i>
            <span className="d-none d-lg-inline"> Search</span>
        </a>
        <a className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`}
           href="/profile">
            <i className="bi bi-person-circle"></i>
            <span className="d-none d-lg-inline"> Profile</span>
        </a>
        {
            (userType === "ANON") && <a className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`}
                                        href="/register">
                <i className="bi bi-person-fill-add"></i>
                <span className="d-none d-lg-inline"> Register</span>
            </a>
        }
        {
            (userType !== "ANON") && <a className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`}
                                        href="/connect">
                <i className="bi bi-chat"></i>
                <span className="d-none d-lg-inline"> Connect</span>
            </a>
        }
        <a className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`}
           href="/login">
            <i className="bi bi-box-arrow-in-right"></i>
            <span className="d-none d-lg-inline"> {userType === "ANON" ? "Login" : "Logout"}</span>
        </a>
    </div>);
};

export default NavigationSidebar;