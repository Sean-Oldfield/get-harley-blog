import React, { useState, useEffect } from 'react';

import blog from '../apis/blog';
import UserProfileLoading from './loading/UserProfileLoading';

const UserProfile = props => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            const res = await blog.get(`user/${props.match.params.id}`);
            setUser(res.data);
            setLoading(false);
        }
        fetchUser();
    }, []);

    if (loading) {
        return <UserProfileLoading />;
    }
    return (
        <div className="ui raised centered card">
            <div className="image">
                <img alt="user avatar" src={user.picture} />
            </div>
            <div className="content">
                <a className="header">{user.firstName} {user.lastName}</a>
                <div className="meta">
                <span className="date">Joined CHNGE</span>
                </div>
                <div className="description">
                {user.location.city}, {user.location.country}
                </div>
            </div>
            <div className="extra content">
                <div className="ui label">
                    <i className="mail icon"></i> {user.email}
                </div>
                <div className="ui label">
                    <i className="phone icon"></i> {user.phone}
                </div>
            </div>
        </div>
    );
}

export default UserProfile;