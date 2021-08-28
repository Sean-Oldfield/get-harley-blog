import React, { useEffect, useState } from 'react';
import blog from '../apis/blog';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import './styles/UsersList.css';
import Pagination from './Pagination';

const UsersList = () => {

    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(10);
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
                <div className="item list-item" key={user.id}>
                    <div className="right floated content action-buttons">
                        <Link to={`users/show/${user.id}`} className="ui button primary">
                            <i className="user circle icon"></i>
                            Profile
                        </Link>
                        <Link to={`users/${user.id}/posts`} className="ui button">
                            <i className="newspaper icon"></i>
                            Posts
                        </Link>
                    </div>
                    <img alt="avatar" className="ui avatar image" src={user.picture} />
                    <div className="content">
                        <Link to={`users/show/${user.id}`} className="header">{user.firstName} {user.lastName}</Link>
                        <div className="description">
                            {user.postCount} posts created.
                        </div>
                    </div>
                </div>
            );
        });
    }

    if(loading) {
        return (
            <div>
                <h1>Users</h1>
                <Skeleton height={40} count={10}/>
            </div>
        );
    }
    return (
        <div>
            <h1>Users</h1>
            <div className="ui large middle aligned divided list">
                {renderList()}
            </div>
            <Pagination itemsPerPage={usersPerPage} totalItems={users.length} paginate={paginate} />
        </div>
    );
}

export default UsersList;