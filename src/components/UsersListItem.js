import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import blog from '../apis/blog';

const UsersListItem = ({ user }) => {

    const [loading, setLoading] = useState(true);
    const [postCount, setPostCount] = useState(null);

    useEffect(() => {
        const fetchPostData = async () => {
            setLoading(true);
            const res = await blog.get(`user/${user.id}/post`);
            setPostCount(res.data.data.length);
            setLoading(false);
        }
        fetchPostData();
    }, []);

    return (
        <div className="ui raised card" key={user.id}>
            <div className="image">
                <img alt={`${user.firstName} ${user.lastName}`} src={user.picture} />
            </div>
            <div className="content">
                <Link to={`/users/show/${user.id}`} className="header">{user.firstName} {user.lastName}</Link>
                <div className="meta">
                    {loading ? <div className="ui placeholder"><div className="very short line"></div></div> :
                    <span className="date">{postCount} posts created.</span>
                    }
                </div>
            </div>
            <div className="extra content" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Link to={`/users/show/${user.id}`} className="ui button" style={{margin: '0'}}>
                    <i className="user circle icon"></i> Profile
                </Link>
                <Link to={`/users/${user.id}/posts`} className="ui button black" style={{margin: '0'}}>
                    <i className="camera retro icon"></i> Posts
                </Link>
            </div>
        </div>
    );
}

export default UsersListItem;