import React from 'react';

import './Pagination.css';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            <div className="spacer">
            </div>
            <ul className="pagination-list">
                {pageNumbers.map(number => {
                    return (
                        <li onClick={() => paginate(number)} key={number} className="pagination-list-item">
                            <button className="circular ui icon button pagination-button">
                                {number}   
                            </button>
                        </li>
                    );
                })}
            </ul>
            <div className="spacer">
            </div>
        </div>
    );
}

export default Pagination;