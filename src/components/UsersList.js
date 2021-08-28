import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import blog from '../apis/blog';
import UsersListLoading from './loading/UsersListLoading';
import Pagination from './Pagination';

const UsersList = () => {

    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(8);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            const res = await blog.get('user', { params: { limit: '12' } });
            const tempUsers = res.data.data;
            for (let i=0; i<tempUsers.length; i++) {
                const res2 = await blog.get(`user/${tempUsers[i].id}/post`);
                tempUsers[i]["postCount"] = res2.data.data.length;
            }
            setUsers(tempUsers);
            setLoading(false);
        }
        fetchUsers();
    }, []);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    // Change Page
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    }

    const renderList = () => {
        return currentUsers.map(user => {
            return (
                <div className="ui raised card" key={user.id}>
                    <div className="image">
                        <img src={user.picture} />
                    </div>
                    <div className="content">
                        <Link to={`/users/show/${user.id}`} className="header">{user.firstName} {user.lastName}</Link>
                        <div className="meta">
                            <span className="date">{user.postCount} posts created.</span>
                        </div>
                    </div>
                    <div className="extra content">
                        <Link to={`/users/show/${user.id}`} className="ui button">
                            <i className="user circle icon"></i> Profile
                        </Link>
                        <Link to={`/users/${user.id}/posts`} className="ui button primary">
                            <i className="newspaper icon"></i> Posts
                        </Link>
                    </div>
                </div>
            );
        });
    }

    if(loading) {
        return <UsersListLoading />;
    }
    return (
        <div>
            <h1>Users</h1>
            <div className="ui four stackable cards">
                {renderList()}
            </div>
            <Pagination itemsPerPage={usersPerPage} totalItems={users.length} paginate={paginate} />
        </div>
    );
}

export default UsersList;