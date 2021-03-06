import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import blog from '../../apis/blog';
import PostList from './PostList';
import Pagination from '../Pagination';
import PostListLoading from './PostListLoading';

const TagPosts = props => {

    const [tag, setTag] = useState(props.match.params.tag);
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTagPosts = async () => {
            setLoading(true);
            const res = await blog.get(`tag/${tag}/post`, { params: { limit: '30' } });
            setPosts(res.data.data);
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
    if (!posts.length) {
        return (
            <div>
                <h1>No Posts Found</h1>
                <h3>Sorry but we don't have any posts matching that query. Head back home by clicking the button below.</h3>
                <Link to="/" className="ui button black">
                    Back To Home
                </Link>
            </div>
        );
    }
    return (
        <div>
            <h1 className="ui header" style={{ marginBottom: '30px'}}>
                <i className="tag icon"></i>
                <div className="content">
                    {formatTagName(tag)}
                </div>
            </h1>
            <PostList posts={currentPosts} setTag={setTag} />
            <Pagination itemsPerPage={postsPerPage} totalItems={posts.length} paginate={paginate} />
        </div>
    );
}

export default TagPosts;