import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './index';

configure({adapter : new Adapter() })

import { shallow, mount, render } from 'enzyme';

describe("Header component",()=> {
  test('Component mount sucessfully', ()=>{
    let myComponent = shallow(<Header/>);
    const wrapper = myComponent.find('.wrapper')
    expect(wrapper.length).toBe(1)
  })
})


