import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Headline from './index';
import { findByData } from '../../../Utils';
 
 configure({adapter : new Adapter})

  const setUp =(props={})=>{
    const component = shallow(<Headline {...props}/>)
    return component;
  }


describe ("Headline Component", ()=>{
    describe('Have props', () => {

        let myComponent;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            };
            myComponent = setUp(props);
        });

        it('Should render without errors', () => {
            let component = findByData(myComponent, 'HeadlineComponent')
            expect(component.length).toBe(1)
        });

        it('Should render header without errors', () => {
            let component = findByData(myComponent, 'header')
            expect(component.length).toBe(1)
        });

        it('Should render desc tag without errors', () => {
            let component = findByData(myComponent, 'desc')
            expect(component.length).toBe(1)
        });
    });

    describe('Have NO props', () => {
        let myComponent;
        beforeEach(() => {
            myComponent = setUp();
        }); 

        it('Should not render', () => {
            const component = findByData(myComponent, 'HeadlineComponent');
            expect(component.length).toBe(0);
        });
    });
})