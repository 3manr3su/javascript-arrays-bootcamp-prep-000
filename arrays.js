var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  newArray = [element, ...array]
  return newArray
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [element, ...array]
  return array
}
function addElementToEndOfArray(array, element) {
  newArray = [...array, element]
  return newArray
}
function destructivelyAddElementToEndOfArray(array, element) {
  array = [...array, element]
  return array
}
function accessElementInArray(array, index) {
  console.log(array[index])
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array) {
  newArray = array.slice(1)
  return newArray
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray(array) { 
  newArray = array.slice(0, array.length-2)
  return newArray
}

