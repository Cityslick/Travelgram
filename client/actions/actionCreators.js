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