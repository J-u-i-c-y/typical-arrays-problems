
exports.min = function min (array) {
  if(array === undefined) return 0;
  let value = array[0];
  if(array.length === 0) {
    return 0;
  } 
  for(let i = 0; i < array.length; i++) {
    if(value > array[i]){
      value = array[i];
    }
  }
  return value;
}

exports.max = function max (array) {
  if(array === undefined) return 0;
  let value = array[0];
  if(array.length === 0) {
    return 0;
  } 
  for(let i = 0; i < array.length; i++) {
    if(value < array[i]){
      value = array[i];
    }
  }
  return value;
}

exports.avg = function avg (array) {
  if(array === undefined) return 0;
  if(array.length === 0) {
    return 0;
  } 
  let count = 0;
  for(let i = 0; i < array.length; i++) {
    count += array[i];
  }
  return count / array.length;;
}
