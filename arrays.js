var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  newArray = [element, ...array]
  return newArray
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [element, ...array]
}
function addElementToEndOfArray(array, element) {
  newArray = [...array, element]
  return newArray
}
function destructivelyAddElementToEndOfArray(array, element) {
  array = [...array, element]
}
function accessElementInArray(array, index) {
  console.log(array[index])
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
}
function removeElementFromBeginningOfArray(array) {
  newArray = array.slice(1)
  return newArray
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
}
function removeElementFromEndOfArray(array) {
  newArray = array.slice(0, array.length-2)
  return newArray
}
