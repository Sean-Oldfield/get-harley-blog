import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>404 Page Not Found</h1>
            <h3>Sorry but this page doesn't exist. Head back home by clicking the button below.</h3>
            <Link to="/" className="ui button black">
                Back To Home
            </Link>
        </div>
    );
}

export default NotFound;