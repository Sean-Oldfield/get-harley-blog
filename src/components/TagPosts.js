import React, { useState, useEffect } from 'react';
import blog from '../apis/blog';
import PostList from './PostList';
import Skeleton from 'react-loading-skeleton';

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
        return (
            <div>
                <h1>Tag Name</h1>
                <Skeleton height={40} count={10}/>
            </div>
        );
    }
    return (
        <div>
            <h1>{tag}</h1>
            <PostList posts={posts} />
        </div>
    );
}

export default TagPosts;