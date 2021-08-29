import React from 'react';

import Post from './Post';

const PostList = ({ posts, setTag }) => {

    const renderList = () => {
        return posts.map(post => {
            return (
                <Post setTag={setTag} post={post} key={post.id} />   
            );
        });
    }

    return (
        <div className="ui three stackable cards">
            {renderList()}
        </div>
    );
}

export default PostList;