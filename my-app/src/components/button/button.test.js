import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {findByData, checkProps} from '../../../Utils';
import Button from './Button';

configure({adapter: new Adapter})

describe("Button Component", ()=>{
const props = {
      buttonText: "Button text",
      emitEvent: ()=>{}
    }
  describe("Checking propTypes", ()=>{
    test("It should NOT throw an Error", ()=>{
 
      const result = checkProps(Button, props)
      expect(result).toBeUndefined()
    })
  })

  describe("Button mount successfully", ()=>{
    let wrapper;
    beforeEach(()=>{
      wrapper = shallow(<Button {...props} />)
    })

    test("Should render a button component", ()=>{
      const component = findByData(wrapper, 'buttonComponent');
      expect(component.length).toBe(1)
    })

  })

})