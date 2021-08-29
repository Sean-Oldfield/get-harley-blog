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
                    style={{margin:'0 6px 6px 0'}}
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
                } else {
                    return;
                }
            });
        }
    }

    return (
        <div className="ui raised card" key={post.id}>
            <div className="content">
                <div className="right floated meta">{new Date(post.publishDate).toLocaleDateString()}</div>
                <Link to={`/users/show/${post.owner.id}`}>
                    <img alt="" className="ui avatar image" src={post.owner.picture} /> {post.owner.firstName}
                </Link> 
            </div>
            <div className="image">
                <img alt={post.text} src={post.image} />
            </div>
            <div className="content">
                {renderTags()}
                <div className="description" style={{marginTop: '10px', marginBottom: '14px'}}>
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