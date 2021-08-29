import React from 'react';

const Comment = ({ comment }) => {

    return (
        <div className="comment" key={comment.id}>
            <div className="avatar">
                <img alt="" src={comment.owner.picture} />
            </div>
            <div className="content">
                <span className="author">{comment.owner.firstName} {comment.owner.lastName}</span>
                <div className="text">
                    {comment.message}
                </div>
            </div>
        </div>  
    );
}

export default Comment;