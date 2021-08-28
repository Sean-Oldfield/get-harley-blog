import React from 'react';

const PostListLoading = () => {
    
    const renderCards = () => {
        const arr = [1, 2, 3, 4];
        return arr.map(item => {
            return (
                <div class="ui raised card">
                    <div className="content">
                        <div class="ui placeholder">
                            <div class="image header">
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                        </div>
                    </div>
                    <div class="image">
                        <div class="ui placeholder">
                            <div class="square image"></div>
                        </div>
                    </div>
                    <div class="content">
                        <div style={{marginBottom:'10px'}} className="ui label small">
                            <i className="tag icon"></i>
                            ...
                        </div>
                        <div style={{marginBottom:'10px'}} class="ui placeholder">
                            <div class="header">
                                <div class="very short line"></div>
                                <div class="medium line"></div>
                            </div>
                            <div class="paragraph">
                                <div class="short line"></div>
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
            <h1>Posts</h1>
            <div className="ui four stackable cards">
                {renderCards()}
            </div>
        </div>
    );
}

export default PostListLoading;