import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from 'react-router-dom';

import Post from './Post'

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

const fakePost = {
    id: '1',
    text: 'This is a fake post',
    image: 'https://img.dummyapi.io/photo-1568034097331-52327e0ad82d.jpg',
    likes: 20,
    tags: ['fake', 'post'],
    publishDate: '27/03/2020',
    owner: {
        id: '1',
        title: 'mr',
        firstName: 'Sean',
        lastName: 'Oldfield',
        picture: 'https://img.dummyapi.io/photo-1586046524244-331e228cc8a2.jpg'
    }
};

describe('Post', () => {

    it("Post renders when given required props", () => {
        act(() => {
            render(
                // Must render BrowserRouter as Post contains Link elements
                <BrowserRouter>
                    <Post post={fakePost} key={fakePost.id} setTag={() => 'fake function'} />
                </BrowserRouter>, container
            );
        });
        expect(container.querySelector('.description').textContent).toBe('This is a fake post');
        expect(container.querySelector('.post-owner').textContent).toBe(' Sean');
    });

});