import React from 'react';

const PostListLoading = () => {
    
    const renderCards = () => {
        const arr = [1, 2, 3, 4];
        return arr.map(item => {
            return (
                <div className="ui raised card" key={item}>
                    <div className="content">
                        <div className="ui placeholder">
                            <div className="image header">
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <div className="ui placeholder">
                            <div className="square image"></div>
                        </div>
                    </div>
                    <div className="content">
                        <div style={{marginBottom:'10px'}} className="ui label small">
                            <i className="tag icon"></i>
                            ...
                        </div>
                        <div style={{marginBottom:'10px'}} className="ui placeholder">
                            <div className="header">
                                <div className="very short line"></div>
                                <div className="medium line"></div>
                            </div>
                            <div className="paragraph">
                                <div className="short line"></div>
                            </div>
                        </div>
                        <span className="right floated">
                            <i className="heart outline like icon"></i> ..
                        </span>
                        <i className="comment icon"></i> ..
                    </div>
                </div>
            );
        });
    }
    
    return (
        <div>
            <h1 className="ui header" style={{ marginBottom: '30px'}}>
                <div className="content">
                    Loading Posts...
                </div>
            </h1>
            <div className="ui four stackable cards">
                {renderCards()}
            </div>
        </div>
    );
}

export default PostListLoading;