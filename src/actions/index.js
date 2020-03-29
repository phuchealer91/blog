import * as types from '../constants/index';
import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';
//  import axios from 'axios';
export const fetchPostsAndUsers = () => async (dispatch,getState) => {
   await dispatch(fetchPosts());
//    console.log(getState().posts);
//    uniq loại bỏ phần tử trùng và trả về mảng new
// lấy thuộc tính userId trong mảng đó và trả về mảng
//    const userIds = _.uniq(_.map(getState().posts,'userId'));
//         userIds.forEach(id => dispatch(fetchUsers(id)))
    // Gop nhieu ham bang chain
    _.chain(getState().posts)
     .map('userId')
     .uniq()
     .forEach(id => dispatch(fetchUsers(id)))
     .value()
}


export const fetchPosts = () => async dispatch => {
    // const promise = jsonPlaceholder.get('/stats');
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
        type: types.FETCH_POSTS,
        payload: response.data
    });
   
   };



// export const fetchUsers = (id) => dispatch =>  memoizeUser(id,dispatch);
//     // const promise = jsonPlaceholder.get('/stats');
//     // Memoization là một kỹ thuật tối ưu hóa, giúp tăng tốc các ứng dụng bằng cách lưu trữ kết quả
//     //  của các lệnh gọi hàm (mà các hàm này được gọi là expensive function) và trả về kết quả được 
//     // lưu trong bộ nhớ cache khi có cùng một đầu vào yêu cầu (đã được thực thi ít nhất 1 lần trước đó rồi).
// const memoizeUser = _.memoize(async (id,dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({
//         type: types.FETCH_USERS,
//         payload: response.data
//     });
// });

export const fetchUsers = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({
        type: types.FETCH_USERS,
        payload: response.data
    })
}

export const selectPost = () => {
    return {
        type: types.SELECT_POST
    }
}