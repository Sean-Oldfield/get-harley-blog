import React, { useEffect, useState } from 'react';

import blog from '../apis/blog';
import UsersListLoading from './loading/UsersListLoading';
import Pagination from './Pagination';
import UsersListItem from './UsersListItem';

const UsersList = () => {

    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(6);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            const res = await blog.get('user', { params: { limit: '20' } });
            const users = res.data.data;
            setUsers(users);
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
                <UsersListItem user={user} key={user.id} />
            );
        });
    }

    if(loading) {
        return <UsersListLoading />;
    }
    return (
        <div>
            <h1 className="ui header" style={{ marginBottom: '30px'}}>
                <i className="users icon"></i>
                <div className="content">
                    Users
                </div>
            </h1>
            <div className="ui three stackable cards">
                {renderList()}
            </div>
            <Pagination itemsPerPage={usersPerPage} totalItems={users.length} paginate={paginate} />
        </div>
    );
}

export default UsersList;