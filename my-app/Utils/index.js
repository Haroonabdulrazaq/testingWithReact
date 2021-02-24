import checkPropTypes from 'check-prop-types';

export const findByData =(component, attr)=>{
  let result =  component.find(`[data-test='${attr}']`);
  return result;
}

export const checkProps = (component, expectedProps)=>{
  const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
  return propsErr 
}