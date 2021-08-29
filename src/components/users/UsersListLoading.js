import React from 'react';

const UsersListLoading = () => {

    const renderCards = () => {
        const arr = [1, 2, 3, 4];
        return arr.map(item => {
            return (
                <div className="ui raised card" key={item}>
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
                    <div className="extra content" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <div className="ui disabled button" style={{margin: '0'}}><i className="user circle icon"></i> Profile</div>
                        <div className="ui disabled black button" style={{margin: '0'}}><i className="camera retro icon"></i> Posts</div>
                    </div>
                </div>
            );
        });
    }
    return (
        <div>
            <h1 className="ui header" style={{ marginBottom: '30px'}}>
                <i className="users icon"></i>
                <div className="content">
                    Users
                </div>
            </h1>
            <div className="ui three stackable cards">
                {renderCards()}
            </div>
        </div>
    );
}

export default UsersListLoading;