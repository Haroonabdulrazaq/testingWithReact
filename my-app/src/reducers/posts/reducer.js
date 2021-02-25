import {types} from '../../actions/types';

export const postReducer = (state=[], action)=>{
  switch (action.type) {
    case types.GET_POSTS:
        return action.payload;
    default:
      return state;
  }
}