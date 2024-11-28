import React from "react";
import { Link } from "react-router-dom";

const notFoundStyles = {
    maxWidth: "90vw",
    margin: "auto",
    margintop: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
};

function NotFound() {
    return (
        <div style={notFoundStyles}>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for could not be found.</p>
            <Link to="/">Go back to the homepage</Link>
        </div>
    );
}

export default NotFound;