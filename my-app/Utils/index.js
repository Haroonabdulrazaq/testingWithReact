import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import  rootReducer  from '../src/reducers';
import { middlewares }  from '../src/createStore'

export const findByData =(component, attr)=>{
  let result =  component.find(`[data-test='${attr}']`);
  return result;
}

export const checkProps = (component, expectedProps)=>{
  const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
  return propsErr 
}

export const testStore =( initialState )=>{
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState)
}