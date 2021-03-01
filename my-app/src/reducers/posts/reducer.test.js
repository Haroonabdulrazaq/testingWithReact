import {types} from '../../actions/types';
import {postReducer} from './reducer';

describe("Posts reducer", ()=> {
  it("Should return default state", ()=>{ //If type is not match
    const newState = postReducer(undefined, {}) 
    expect(newState).toEqual([])
  })
 
  it("Should return new state, if type match",()=>{
    const posts = [{title: "Test title1"},{title: "Test title2"}]
    const newState = postReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts
    })
    expect(newState).toEqual(posts)
  })
}) 
