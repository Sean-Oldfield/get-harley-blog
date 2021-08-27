import React, { useState, useEffect } from 'react';
import blog from '../apis/blog';
import PostList from './PostList';

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

    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <h1>User Name</h1>
            <PostList posts={posts} />
        </div>
    );
}

export default UserPosts;