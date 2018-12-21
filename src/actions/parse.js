'use strict';
let parse = function(data){
  const key = Object.keys(data);
  const length = data[key].length;
  let object = [];
  for(let i = 0; i < length; i++){
    object.push(data[key])
  }
  return object;
}

export {parse};