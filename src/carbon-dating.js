import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  let n = Number(sampleActivity);
  let result;

  if ((typeof sampleActivity != 'string') || (isNaN(n)) || (n === 0) || ((n > 15) || (n <= 0))) {
    return false;
  } else {
    result = Math.ceil(((Math.log(15/n))/(0.693/5730)));
    return result;
  }
  
}
