import React, { useState, useEffect } from 'react';

import blog from '../apis/blog';
import PostList from './PostList';
import Pagination from './Pagination';
import PostListLoading from './loading/PostListLoading';

const TagPosts = props => {

    const [tag, setTag] = useState(props.match.params.tag);
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTagPosts = async () => {
            setLoading(true);
            const res = await blog.get(`tag/${tag}/post`, { params: { limit: '30' } });
            const tempPosts = res.data.data;
            for (let i=0; i<tempPosts.length; i++) {
                const res2 = await blog.get(`post/${tempPosts[i].id}/comment`);
                tempPosts[i].comments = res2.data.data;
            }
            setPosts(tempPosts);
            setLoading(false);
        }
        fetchTagPosts();
    }, [tag]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

     // Change Page
     const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    }

    const formatTagName = tag => {
        return tag[0].toUpperCase() + tag.substring(1)
    }

    if (loading) {
        return <PostListLoading />;
    }
    return (
        <div>
            <h1 class="ui header" style={{ marginBottom: '30px'}}>
                <i class="tag icon"></i>
                <div class="content">
                    {formatTagName(tag)}
                </div>
            </h1>
            <PostList posts={currentPosts} setTag={setTag} />
            <Pagination itemsPerPage={postsPerPage} totalItems={posts.length} paginate={paginate} />
        </div>
    );
}

export default TagPosts;