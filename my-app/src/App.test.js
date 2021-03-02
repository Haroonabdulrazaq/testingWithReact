import React from 'react';
import App from './App'
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {findByData, testStore} from '../Utils';

configure({ adapter: new Adapter() })

// To test a connectd component 
// Mock the store
// and dive into the comonent using childAt(0) and dive() method see Line 14
const setUp = (initialState={})=>{
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />).childAt(0).dive()
  return wrapper;
}



describe("App Component", ()=>{
  let wrapper;

  beforeEach(()=>{
    const initialState = {
      postReducer: [
        {
          title: 'Sample title 1',
          body: 'Sample text'
        },
        {
          title: 'Sample title 2',
          body: 'Sample text'
        },
        {
          title: 'Sample title 3',
          body: 'Sample text'
        },
      ]
    }
 
    wrapper = setUp(initialState);
  })

  test("Should render sucessfully", ()=>{
    const myComponent = findByData(wrapper, 'appComponent');

    expect(myComponent.length).toBe(1)
  })

  test("Should update state as expected",()=>{
    const classInstance = wrapper.instance();
    classInstance.updateBtnState()
    const newState = classInstance.state.hideBtn;

    expect(newState).toEqual(true);
  })

  test("Should fetchPost from API",()=>{
    const classInstance = wrapper.instance()
    const expectedBehavior = classInstance.props.fetchPosts()
    expect(expectedBehavior).toBeTruthy()
  })
})