import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import UsersList from './UsersList';
import UserProfile from './UserProfile';
import UserPosts from './UserPosts';
import TagPosts from './TagPosts';
import Header from './Header';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={UsersList} />
                <Route path="/users/show/:id" exact component={UserProfile} />
                <Route path="/users/:userId/posts" exact component={UserPosts} />
                <Route path="/posts/:tag" exact component={TagPosts} />
            </BrowserRouter>
        </div>
    );
}

export default App;