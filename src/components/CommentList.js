import React from 'react';

import Comment from './Comment';

const CommentList = ({ comments }) => {

    const renderList = () => {
        const firstComments = comments.slice(0, 2);
        return firstComments.map(comment => {
            return (
                <Comment comment={comment} key={comment.id} /> 
            );   
        });
    }

    return (
        <div className="extra content">
            <div className="ui minimal comments">
                {renderList()}
            </div>
        </div>
    );
} 

export default CommentList;