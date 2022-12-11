import React from "react";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {parts} = useLocation();
    const active = parts.split('/')[1];
    return (<div className="list-group">
        <a className={`list-group-item
                    ${active === 'home' ? 'active' : ''}`}
           href="/">
            <i className="bi bi-house-door-fill"></i>
            <span className="d-none d-lg-inline"> Home</span>
        </a>
        <a className={`list-group-item
                    ${active === 'explore' ? 'active' : ''}`}
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
        <a className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`}
           href="/register">
            <i className="bi bi-person-fill-add"></i>
            <span className="d-none d-lg-inline"> Register</span>
        </a>
        <a className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`}
           href="/login">
            <i className="bi bi-box-arrow-in-right"></i>
            <span className="d-none d-lg-inline"> Login</span>
        </a>
    </div>);
};

export default NavigationSidebar;