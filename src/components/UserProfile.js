import React, { useState, useEffect } from 'react';
import blog from '../apis/blog';

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
        return <h1>Loading...</h1>;
    }
    return (
        <div>
            <h1>{user.firstName} {user.lastName}</h1>
            <img alt="avatar" src={user.picture} />
            <h3>{user.phone}</h3>
        </div>
    );
}

export default UserProfile;