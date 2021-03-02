import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {findByData, checkProps} from '../../../Utils';
import Button from './Button';

configure({adapter: new Adapter})

describe("Button Component", ()=>{
  let wrapper, mockFunc;
const props = {
      buttonText: "Button text",
      emitEvent: ()=>{

      }
    }
  describe("Checking propTypes", ()=>{
    test("It should NOT throw an Error", ()=>{
 
      const result = checkProps(Button, props)
      expect(result).toBeUndefined()
    })
  })

  describe("Button mount successfully", ()=>{
    let wrapper, mockFunc;
    beforeEach(()=>{
      mockFunc = jest.fn()

      const props = {
        buttonText: "Button text",
        emitEvent: mockFunc
      }
      wrapper = shallow(<Button {...props} />)
    })

    test("Should render a button component", ()=>{
      const component = findByData(wrapper, 'buttonComponent');
      expect(component.length).toBe(1)
    })

    test("Should emit callback on click event",()=>{
      const button  = findByData(wrapper, 'buttonComponent');
      button.simulate('click')
      const callback = mockFunc.mock.calls.length
      expect(callback).toBe(1)
    })

  })

})






// import React from 'react';
// import { shallow, configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import { findByData, checkProps } from './../../../Utils';
// import SharedButton from './Button';

// configure({adapter: new Adapter()})


// describe('SharedButton Component', () => {

//     describe('Checking PropTypes', () => {

//         it('Should NOT throw a warning', () => {
//             const expectedProps = {
//                 buttonText: 'Example Button Text',
//                 emitEvent: () => {

//                 }
//             };
//             const propsError = checkProps(SharedButton, expectedProps);
//             expect(propsError).toBeUndefined();
//         });

//     });

//     describe('Renders', () => {

//         let wrapper;
//         let mockFunc;
//         beforeEach(() => {
//             mockFunc = jest.fn();
//             const props = {
//                 buttonText: 'Example Button Text',
//                 emitEvent: mockFunc
//             };
//             wrapper = shallow(<SharedButton {...props} />);
//         });

//         it('Should Render a button', () => {
//             const button = findByData(wrapper, 'buttonComponent');
//             expect(button.length).toBe(1);
//         });

//         it('Should emit callback on click event', () => {
//             const button = findByData(wrapper, 'buttonComponent');
//             button.simulate('click');
//             const callback = mockFunc.mock.calls.length;
//             expect(callback).toBe(1);
//         });


//     });




// });