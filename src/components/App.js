import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import UsersList from './UsersList';
import UserProfile from './UserProfile';
import UserPosts from './UserPosts';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <Route path="/" exact component={UsersList} />
                <Route path="/users/show/:id" exact component={UserProfile} />
                <Route path="/users/:userId/posts" exact component={UserPosts} />
            </BrowserRouter>
        </div>
    );
}

export default App;