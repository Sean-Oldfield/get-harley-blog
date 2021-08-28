import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu" style={{ marginBottom: '30px' }}>
            <Link to="/" className="active item">
                GetHarley Blog
            </Link>
            <div className="right menu">
                <span className="ui item" style={{ fontStyle: 'italic' }}>
                    Powered By Experts
                </span>
            </div>
        </div>
    );
}

export default Header;