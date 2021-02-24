export const findByData =(component, attr)=>{
  let result =  component.find(`[data-test='${attr}']`);
  return result;
}