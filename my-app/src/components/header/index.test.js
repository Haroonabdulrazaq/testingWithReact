import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './index';

configure({adapter: new Adapter() })

import { shallow, mount, render } from 'enzyme';
import { cleanup } from '@testing-library/react';

const setUp = (props={})=>{
  let component = shallow(<Header {...props} />)
  return component
}

describe("Header component",()=> {

  let myComponent;
  beforeEach(()=>{
    myComponent = setUp();
  })

  afterEach(()=>{
    cleanup()
  })

  test('Component mount sucessfully', ()=>{
    const wrapper = myComponent.find(`[data-test='wrapper']`)
    expect(wrapper.length).toBe(1)
  })

  test('Component not mount sucessfully', ()=>{
    const wrapper = myComponent.find(`[data-test='wrapper']`)
    expect(wrapper.length).not.toBeNull()
  })

  test('Logo renders sucessfully', ()=>{
    const image = myComponent.find(`[data-test='logo']`)
    expect(image.length).toBe(1)
  })

  test('Logo not mount', ()=>{

    const image = myComponent.find(`[data-test='logo']`)
    expect(image.length).not.toBeNull()
  })
})


