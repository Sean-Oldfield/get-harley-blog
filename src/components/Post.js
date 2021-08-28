import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post, setTag }) => {

    const renderTags = () => {
        return post.tags.map(tag => {
            return (
                <Link 
                    onClick={() => setTag(tag)} to={`/posts/${tag}`} 
                    className="ui label small"
                    key={tag}
                >
                    <i className="tag icon"></i>
                    {tag}
                </Link>
            );
        });
    } 

    const renderComments = () => {
        let commentsRendered = 0;
        if (post.comments.length > 0) {
            return post.comments.map(comment => {
                if (commentsRendered < 2) {
                    commentsRendered++;
                    return (
                        <div className="comment" key={comment.id}>
                            <a className="avatar">
                                <img alt="avatar" src={comment.owner.picture} />
                            </a>
                            <div className="content">
                                <a className="author">{comment.owner.firstName} {comment.owner.lastName}</a>
                                <div className="metadata">
                                    <span className="date">Change</span>
                                </div>
                                <div className="text">
                                    {comment.message}
                                </div>
                            </div>
                        </div>  
                    );
                }
            });
        }
    }

    return (
        <div className="ui raised card" key={post.id}>
            <div className="content">
                <div className="right floated meta">Change</div>
                <Link to={`/users/show/${post.owner.id}`}>
                    <img alt="user avatar" className="ui avatar image" src={post.owner.picture} /> {post.owner.firstName}
                </Link>
            </div>
            <div className="image">
                <img alt="post image" src={post.image} />
            </div>
            <div className="content">
                {renderTags()}
                <div className="description">
                    {post.text}
                </div>
                <span className="right floated">
                <i className="heart outline like icon"></i> {post.likes}
                </span>
                <i className="comment icon"></i> {post.comments.length}
            </div>
                {post.comments.length > 0 ? <div className="extra content"><div className="ui minimal comments">
                    {renderComments()}
                </div></div>: null}     
        </div>
    );
}

export default Post;