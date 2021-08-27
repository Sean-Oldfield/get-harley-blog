import React from 'react';
import Post from './Post';

const PostList = ({ posts }) => {

    const renderList = () => {
        return posts.map(post => {
            return (
                <Post post={post} key={post.id} id={post.id} />   
            );
        });
    }

    return (
        <div className="ui celled list">
            {renderList()}
        </div>
    );
}

export default PostList;