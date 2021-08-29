import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import blog from '../../apis/blog';
import CommentList from '../comments/CommentList';
import CommentLoading from '../comments/CommentLoading';

const Post = ({ post, setTag }) => {

    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            setLoading(true);
            const res = await blog.get(`post/${post.id}/comment`);
            setComments(res.data.data);
            setLoading(false);
        }
        fetchComments();
    }, []);

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

    return (
        <div className="ui raised card" key={post.id}>
            <div className="content">
                <div className="right floated meta">{new Date(post.publishDate).toLocaleDateString()}</div>
                <Link to={`/users/show/${post.owner.id}`} className="post-owner">
                    <img alt="" className="ui avatar image" src={post.owner.picture} /> {post.owner.firstName}
                </Link> 
            </div>
            <div className="image post-image">
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
                <i className="comment icon"></i> {comments.length}
            </div>
            {
                loading ? <CommentLoading /> : comments.length > 0 ? <CommentList comments={comments} /> : null
            }     
        </div>
    );
}

export default Post;