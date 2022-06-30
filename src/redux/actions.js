import { database } from "../database/config";
import { getDatabase, ref, set, child, get } from "firebase/database";

const db = getDatabase();
export function startAddingPost(post) {
    return (dispatch) => {
        return set(ref(db, `posts/${post.id}`), {
            ...post
          }).then(()=> {
            dispatch(addPost(post));
        }).catch((error) => {
            console.log(error);
        })
    }
}
export function startLoadingPosts () {
    return (dispatch) => {
        const dbRef = ref(db);
          return get(child(dbRef, `posts`)).then((snapshot) => {
            let posts =[];
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val());
            });
            dispatch(loadPosts(posts));
          }).catch((error) => {
            console.error(error);
          });
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

export function loadPosts(posts) {
    return {
        posts,
        type: 'LOAD_POSTS'
    }
}

export function addComment(comment,postId) {
    return {
        postId,
        comment,
        type: 'ADD_COMMENT'
    }
}