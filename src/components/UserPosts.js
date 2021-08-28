import React, { useState, useEffect } from 'react';

import blog from '../apis/blog';
import PostList from './PostList';
import Pagination from './Pagination';
import PostListLoading from './loading/PostListLoading';

const UserPosts = props => {

    const userId = props.match.params.userId;
    const [tag, setTag] = useState(null);
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await blog.get(`user/${userId}/post`, { params: { limit: '30' } });
            const tempPosts = res.data.data;
            for (let i=0; i<tempPosts.length; i++) {
                const res2 = await blog.get(`post/${tempPosts[i].id}/comment`);
                tempPosts[i].comments = res2.data.data;
            }
            setPosts(tempPosts);
            setUser(tempPosts[0].owner);
            setLoading(false);
        }
        fetchPosts();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change Page
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    }

    if (loading) {
        return <PostListLoading />;
    }
    return (
        <div>
            <h1>{user.firstName} {user.lastName}</h1>
            <PostList posts={currentPosts} setTag={setTag} />
            <Pagination itemsPerPage={postsPerPage} totalItems={posts.length} paginate={paginate} />
        </div>
    );
}

export default UserPosts;