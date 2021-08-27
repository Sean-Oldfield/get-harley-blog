import React, { useState, useEffect } from 'react';
import blog from '../apis/blog';

const UserPosts = props => {

    const userId = props.match.params.userId;

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await blog.get(`user/${userId}/post`);
            setPosts(res.data.data);
            setLoading(false);
        }
        fetchPosts();
    }, []);

    const renderList = () => {
        return posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <img alt="avatar" className="ui avatar image" src={post.image} />
                    <div className="content">
                        <div className="header">{post.title}</div>
                        <div className="description">
                            {post.text}
                        </div>
                    </div>
                    {/* {this.renderTags(post)} */}
                </div>     
            );
        });
    }

    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <h1>Users</h1>
            <div className="ui celled list">
                {renderList()}
            </div>
        </div>
    );
}

export default UserPosts;