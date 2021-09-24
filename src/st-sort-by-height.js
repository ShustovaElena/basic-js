import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let newArr = [];
  let indexArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      indexArray.push(i);
    } else {
      newArr.push(arr[i]);
    }
  }

  newArr.sort(function(a,b){return a-b;});
  for (let i = 0; i < indexArray.length; i++) {
    newArr.splice(indexArray[i], 0, -1);
  }
  return newArr;
}
