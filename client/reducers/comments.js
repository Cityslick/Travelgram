// a reducer takes in two things:
// 1. the action (what happened)
// 2. a copy/snapshot of current state

//In comes both the action (add, delete, etc) and the store/state into the reducer
//Reducer does [something] and returns a new updated store and then react updates the UI

function comments(state = [], action) {
    console.log(state, action);
    return state;
}

export default comments;