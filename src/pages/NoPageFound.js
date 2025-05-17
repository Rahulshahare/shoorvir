import React from "react";
import { NavLink } from 'react-router-dom';
function NoPageFound() {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <p>The page you are looking for does not exist.</p>
                    <NavLink to={'/'}>Home</NavLink>
                </div>
            </div>
        </div>
    );
}

export default NoPageFound;