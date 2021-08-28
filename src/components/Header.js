import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="active item">
                Blog App
            </Link>
            <div className="right menu">
                <Link to="/" className="ui item">
                    Users
                </Link>
                <a className="ui item">
                    Tags
                </a>
            </div>
        </div>
    );
}

export default Header;