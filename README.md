
# INTRO TO REDUX TUTORIAL

## By Raj Bennin & Joseph DiPeri

## Introduction

Redux is a state management framework for javascript applications.

### According to Redux's Documentation: 

As the requirements for JavaScript single-page applications have become increasingly complicated, our code must manage more state than ever before. This state can include server responses and cached data, as well as locally created data that has not yet been persisted to the server. UI state is also increasing in complexity, as we need to manage active routes, selected tabs, spinners, pagination controls, and so on.

Managing this ever-changing state is hard. If a model can update another model, then a view can update a model, which updates another model, and this, in turn, might cause another view to update. At some point, you no longer understand what happens in your app as you have lost control over the when, why, and how of its state. When a system is opaque and non-deterministic, it's hard to reproduce bugs or add new features.

As if this wasn't bad enough, consider the new requirements becoming common in front-end product development. As developers, we are expected to handle optimistic updates, server-side rendering, fetching data before performing route transitions, and so on. We find ourselves trying to manage a complexity that we have never had to deal with before, and we inevitably ask the question: is it time to give up? The answer is no.

This complexity is difficult to handle as we're mixing two concepts that are very hard for the human mind to reason about: mutation and asynchronicity. I call them Mentos and Coke. Both can be great in separation, but together they create a mess. Libraries like React attempt to solve this problem in the view layer by removing both asynchrony and direct DOM manipulation. However, managing the state of your data is left up to you. This is where Redux enters.

Following in the steps of Flux, CQRS, and Event Sourcing, Redux attempts to make state mutations predictable by imposing certain restrictions on how and when updates can happen. These restrictions are reflected in the three principles of Redux.

## Getting Started

To install the stable version:

` npm install --save redux `

This assumes you are using npm as your package manager.

If you're not, you can access these files on unpkg, download them, or point your package manager to them.

## Travelgram (built with react,redux, and express)

![alt text](images/landing.png "Travelgram!")

### Single Page
![alt text](images/single.png "Single page!")

`npm init `

to setup  the json file and add all of the necessary dependencies

After that is all setup, it will be time to create the react application using

`create-react-app Client `

This will setup the frontend React portion.

## File Structure

Here is a look at the file structure:

Redux has a few more files that need to be integrated into your basic app to utilize the framework. The main concept behind redux is that it operates as one giant object of state that is accessible on any level of the application without having to pass props through each level. This giant object is called the store.

### Store
```

//import to connect react to redux
import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import root reducer
import rootReducer from './reducers/index';

//app data
import comments from './data/comments';
import posts from './data/posts';

//create an object for the default app data
const defaultState = {
    posts,
    comments
};

//create variables and export default store - like an empty db 
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store; 

```

The store looks for changes in state, and reducers are means of doing so.

### Reducers

 Reducers are pure functions that return changes in state. In our particular application we had two main reducer functions. These functions manipulated the posts and comments state.

``` 

// a reducer takes in two things:
// 1. the action (what happened)
// 2. a copy/snapshot of current state

// a reducer does the actual editing of state
// every time an action is dispatched, every reducer will run
// whether something actually changes is up to you

//In comes both the action (add, delete, etc) and the store/state into the reducer
//Reducer does [something] and returns a new updated store and then React updates the UI

// Reducers are pure functions, you cannot directly modify external state within a reducer 

function posts(state = [], action) {
    switch(action.type) {
        case 'INCREMENT_LIKES' :
        // return updated state
            console.log('incrementing likes');
            const i = action.index;
            return [
                ...state.slice(0, i),
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1),
            ]
        default:
            return state;

    }
    return state;
}

export default posts; 

```

```

// a reducer takes in two things:
// 1. the action (what happened)
// 2. a copy/snapshot of current state

// a reducer does the actual editing of state
// every time an action is dispatched, every reducer will run
// whether something actually changes is up to you

//In comes both the action (add, delete, etc) and the store/state into the reducer
//Reducer does [something] and returns a new updated store and then React updates the UI

function postComments(state = [], action) {
    switch(action.type){
        case 'ADD_COMMENT':
        //return the new state of the newly generated comment
            return [...state, {
                user: action.author,
                text: action.comment
            }];
        case 'REMOVE_COMMENT':
            return [
                ...state.slice(0, action.i),
                ...state.slice(action.i + 1)
            ];
        default: 
            return state;
    }
    return state;
}

function comments(state = [], action) {
    if(typeof action.postId !== "undefined") {
        return {
            ...state,
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments; 

```

### Actions

Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using `store.dispatch() ` .

```
//action creators are pure functions
//increment
export function increment(index) {
    return {
        //actions are just objects that have a two things, a type and information that your action needs
        type: 'INCREMENT_LIKES', 
        // ES6, otherwise index: index
        index
    }
}

//add comment
export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

//remove comment 
// i is the index of the specific comment
export function removeComment(postId, i) {
    return {
        type: 'REMOVE_COMMENT',
        i,
        postId
    }
}

```

Stores, reducers , and actions are the fundamental building blocks for successfully integrating redux into your application. 

## Resources

* [Redux Docs](http://redux.js.org/)
* [Wes' Reduxagram Repo](https://github.com/wesbos/Learn-Redux-Starter-Files/tree/master/learn-redux)
* [Wes' Course](http://wesbos.com/learn-redux/)
