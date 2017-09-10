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