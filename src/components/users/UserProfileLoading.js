import React from 'react';

const UserProfileLoading = () => {
    return (
        <div className="ui raised centered card">
            <div className="image">
                <div className="ui placeholder">
                    <div className="square image"></div>
                </div>
            </div>
            <div className="content">
                <div className="ui placeholder">
                    <div className="header">
                        <div className="very short line"></div>
                        <div className="medium line"></div>
                    </div>
                    <div className="paragraph">
                        <div className="short line"></div>
                    </div>
                </div>
            </div>
            <div className="extra content">
                <div className="ui label">
                    <i className="mail icon"></i> ...
                </div>
                <div className="ui label">
                    <i className="phone icon"></i> ...
                </div>
            </div>
        </div>
    );
}

export default UserProfileLoading;