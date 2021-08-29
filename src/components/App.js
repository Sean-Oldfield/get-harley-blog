import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import UsersList from './users/UsersList';
import UserProfile from './users/UserProfile';
import UserPosts from './posts/UserPosts';
import TagPosts from './posts/TagPosts';
import NotFound from './NotFound';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" exact component={UsersList} />
                    <Route path="/users/show/:id" exact component={UserProfile} />
                    <Route path="/users/:userId/posts" exact component={UserPosts} />
                    <Route path="/posts/:tag" exact component={TagPosts} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;