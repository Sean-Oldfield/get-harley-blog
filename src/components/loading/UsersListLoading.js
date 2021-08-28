import React from 'react';


const UsersListLoading = () => {

    const renderCards = () => {
        const arr = [1, 2, 3, 4];
        return arr.map(item => {
            return (
                <div class="ui raised card">
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
                    <div class="extra content" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <div class="ui disabled button" style={{margin: '0'}}><i className="user circle icon"></i> Profile</div>
                        <div class="ui disabled black button" style={{margin: '0'}}><i class="camera retro icon"></i> Posts</div>
                    </div>
                </div>
            );
        });
    }
    return (
        <div>
            <h1 class="ui header" style={{ marginBottom: '30px'}}>
                <i class="users icon"></i>
                <div class="content">
                    Users
                </div>
            </h1>
            <div className="ui four stackable cards">
                {renderCards()}
            </div>
        </div>
    );
}

export default UsersListLoading;