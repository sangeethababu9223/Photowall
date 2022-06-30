import { database } from "../database/config";
import { getDatabase, ref, set } from "firebase/database";

export function startAddingPost(post) {
    const db = getDatabase();
    return (dispatch) => {
        return set(ref(db, `posts/${post.id}`), {
            post
          }).then(()=> {
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