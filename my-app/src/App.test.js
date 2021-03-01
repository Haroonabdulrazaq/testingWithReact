import React from 'react';
import App from './App'
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {findByData, testStore} from '../Utils';

configure({ adapter: new Adapter() })

const setUp = (initialState={})=>{
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />).childAt(0).dive()
  // console.log(wrapper.debug());
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
})