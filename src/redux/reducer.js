import posts from '../data/posts';
import { combineReducers } from 'redux';
function commentsFunc(state=[],action) {
    return state;
}
function postsFunc(state=posts, action) {
    switch (action.type) {
        case 'REMOVE_POST': return [...state.slice(0,action.index),...state.slice(action.index+1)];
        case 'ADD_POST': return [...state, action.post];
        default: return state;
    }
}
const rootReducer = combineReducers(postsFunc, commentsFunc);
export default rootReducer;