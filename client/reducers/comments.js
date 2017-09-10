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