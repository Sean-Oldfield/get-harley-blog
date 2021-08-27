import React, { useEffect, useState } from 'react';
import blog from '../apis/blog';
import { Link } from 'react-router-dom';

const UsersList = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            const res = await blog.get('user');
            setUsers(res.data.data);
            setLoading(false);
        }
        fetchUsers();
    }, []);

    const renderList = () => {
        return users.map(user => {
            return (
                <div className="item" key={user.id}>
                    <img alt="avatar" className="ui avatar image" src={user.picture} />
                    <div className="content">
                        <Link to={`users/show/${user.id}`} className="header">{user.firstName} {user.lastName}</Link>
                        <Link to={`users/${user.id}/posts`} className="description">View Posts</Link>
                    </div>
                </div>
            );
        });
    }

    if(loading) {
        return <h1>Loading...</h1>;
    }
    return (
        <div>
            <h1>Users</h1>
            <div className="ui celled list">
                {renderList()}
            </div>
        </div>
    );
}

export default UsersList;