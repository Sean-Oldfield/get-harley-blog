import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import './styles/Post.css';

const Post = ({ post }) => {

    const renderTags = () => {
        return post.tags.map(tag => {
            return (
                <Link to={`/posts/${tag}`} className="ui button" key={tag}>
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
                                    <span className="date">{comment.publishDate}</span>
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
        <div className="item ui list-item" key={post.id}>
            <div className="right floated content action-buttons">
                {renderTags()}
            </div>
            <img alt="avatar" className="ui avatar image" src={post.image} />
            <div className="content">
                <div className="header">
                    {post.text}
                </div>
                <div className="description">
                    <Link to={`/users/show/${post.owner.id}`}>
                        Created By {post.owner.firstName } {post.owner.lastName }
                    </Link>
                </div>
            </div>
            {post.comments.length > 0 ? <div className="ui minimal comments">
                <h3 className="ui dividing header">{post.comments.length} Comment(s)</h3>
            {renderComments()}
            </div> : null}
        </div> 
    );
}

export default Post;