var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr,element){
  arr = [element, ...arr];
  return arr;
}

function destructivelyAddElementToBeginningOfArray(arr,element){
  arr.unshift(element);
  return arr;
}

function addElementToEndOfArray(arr,element){
  arr = [...arr,element];
  return arr;
}

function destructivelyAddElementToEndOfArray(arr,element){
  arr.push(element);
  return arr;
}

function accessElementInArray(arr,index){
   (index[0] + element);
  return index;
}