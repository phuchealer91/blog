import * as types from '../constants/index';
var initialState = [];

var myReducer = (state = initialState,action) => {
    switch(action.type){
        case types.FETCH_USERS:
            return [...state,action.payload];
        default:
            return state;
    }
}

export default myReducer;