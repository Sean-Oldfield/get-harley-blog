import React, { useState, useEffect } from 'react';

import blog from '../../apis/blog';
import UserProfileLoading from './UserProfileLoading';

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
                <div className="header">{user.firstName} {user.lastName}</div>
                <div className="meta">
                <span className="date">Joined {new Date(user.registerDate).toLocaleDateString()}</span>
                </div>
                <div className="description">
                {user.location.city}, {user.location.country}
                </div>
            </div>
            <div className="extra content">
                <div style={{margin:'0 6px 6px 0'}} className="ui label">
                    <i className="mail icon"></i> {user.email}
                </div>
                <div style={{margin:'0 6px 6px 0'}} className="ui label">
                    <i className="phone icon"></i> {user.phone}
                </div>
            </div>
        </div>
    );
}

export default UserProfile;