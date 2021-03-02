import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findByData, checkProps } from '../../../Utils'
import ListItem from './ListItem';

configure({adapter: new Adapter})

      const props = {
        title: "List title",
        desc: "List desc"
      }
 

describe("List Item Component",()=>{

  describe("Checking List Item Props",()=>{

 
    test("Should NOT throw a warning", ()=>{
      const error = checkProps(ListItem, props)

      expect(error).toBeUndefined()
    })
  })

  describe("List Item Component renders",()=> {
    let wrapper;
    beforeEach(()=>{
      wrapper = shallow(<ListItem {...props}/>)
    })

    test("List Item Component renders Successfully",()=>{
      const component = findByData(wrapper, 'listItemComponent');
      expect(component.length).toBe(1)
    })
    test("List Item Component renders a title",()=>{
      const title = findByData(wrapper, 'title');
      expect(title.length).toBe(1)
    })
    test("List Item Component renders a description",()=>{
      const desc = findByData(wrapper, 'desc');
      expect(desc.length).toBe(1)
    })

  })

  describe("It title is null", ()=>{ //If title is null
  const props = {
        desc: "List desc"
      }
  let wrapper;
    beforeEach(()=>{
      wrapper = shallow(<ListItem {...props}/>)
    })

    test("Should not render", ()=>{
      let component = findByData(wrapper, 'title')

      expect(component.length).toBe(0)
    })
  })
})