import React, { useState, useEffect } from 'react';
import blog from '../apis/blog';
import PostList from './PostList';

const TagPosts = props => {

    const tag = props.match.params.tag;
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTagPosts = async () => {
            setLoading(true);
            const res = await blog.get(`tag/${tag}/post`);
            setPosts(res.data.data);
            setLoading(false);
        }
        fetchTagPosts();
    }, []);


    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <h1>{tag}</h1>
            <PostList posts={posts} />
        </div>
    );
}

export default TagPosts;