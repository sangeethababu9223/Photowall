export function removePost(index) {
    return {
        index,
        type: 'REMOVE_POST'
    }
}

export function addPost(post) {
    return {
        post,
        type: 'ADD_POST'
    }
}