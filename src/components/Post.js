import React, { useEffect, useState } from 'react';
import blog from '../apis/blog';
import { Link } from 'react-router-dom';

const Post = ({id, post}) => {

    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchComments = async () => {
            setLoading(true);
            const res = await blog.get(`post/${id}/comment`, {
                params: {
                    limit: '2'
                }
            });
            setComments(res.data.data);
            setLoading(false);
        }
        fetchComments();
    }, []);

    const renderTags = () => {
        return post.tags.map(tag => {
            return (
                <div className="right floated content" key={tag}>
                    <Link to={`/posts/${tag}`} className="ui button">
                    <i className="tag icon"></i>
                    {tag}
                    </Link>
                </div>
            );
        });
    } 

    const renderComments = () => {
        if (comments.length > 0) {
            return comments.map(comment => {
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
            });
        }
    }

    if (loading) {
        return <h1>Loading...</h1>;
    }
    return (
        <div className="item" key={post.id}>
            {renderTags()}
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
            {comments.length > 0 ? <div className="ui minimal comments">
                <h3 className="ui dividing header">Comments</h3>
            {renderComments()}
            </div> : null}
        </div> 
    );
}

export default Post;