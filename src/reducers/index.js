import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
const myReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer
});

export default myReducer;