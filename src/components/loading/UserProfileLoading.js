import React from 'react';

const UserProfileLoading = () => {
    return (
        <div class="ui raised centered card">
            <div class="image">
                <div class="ui placeholder">
                    <div class="square image"></div>
                </div>
            </div>
            <div class="content">
                <div class="ui placeholder">
                    <div class="header">
                        <div class="very short line"></div>
                        <div class="medium line"></div>
                    </div>
                    <div class="paragraph">
                        <div class="short line"></div>
                    </div>
                </div>
            </div>
            <div class="extra content">
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