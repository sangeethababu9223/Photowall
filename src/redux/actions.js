import { database } from "../database/config"

export function startAddingPost(post) {
    return (dispatch) => {
        return database.ref('posts').update({[post.id]: post}).then(()=> {
            dispatch(addPost(post))
        })
    }
}
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

export function addComment(comment,postId) {
    return {
        postId,
        comment,
        type: 'ADD_COMMENT'
    }
}