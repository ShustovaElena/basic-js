import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let number = Array.from(String(n), Number);
  // let arrNumbers = [];
  
  // for (let i = 0; i < length; i++) {
  //   let number = n.toString().split('').splice(i, 1).join('');
  //   number = parseInt(number);
  //   arrNumbers.push(number);
  // }
  let min = Math.min(...number);
  let index = number.indexOf(min);
  number.splice(index, 1);
  number = number.join('');
  number = parseInt(number);
  return number;
}
