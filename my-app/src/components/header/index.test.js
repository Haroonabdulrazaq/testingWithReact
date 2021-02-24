import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './index';
import { findByData } from '../../../Utils';

configure({adapter: new Adapter() })

import { shallow, mount, render } from 'enzyme';
import { cleanup } from '@testing-library/react';

const setUp =()=>{
  let component = shallow(<Header />)
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


  test('Component mount successfully', ()=>{
    const wrapper = findByData(myComponent, 'wrapper')
    expect(wrapper.length).toBe(1)
  })

  test('Component not mount successfully', ()=>{
    const wrapper = findByData(myComponent, 'wrapper')
    expect(wrapper.length).not.toBeNull()
  })

  test('Logo renders sucessfully', ()=>{
    const image = findByData(myComponent, 'logo')
    expect(image.length).toBe(1)
  })

  test('Logo not mount', ()=>{

    const image = findByData(myComponent, 'logo')
    expect(image.length).not.toBeNull()
  })
})


