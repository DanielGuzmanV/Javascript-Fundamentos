// Dado un array de enteros "nums" y un entero "target", devuelva los índices 
// de los dos números tales que sumen target.
// Puede suponer que cada entrada tendría exactamente una solución,
// y no puede utilizar el mismo elemento dos veces.
// Puede devolver la respuesta en cualquier orden.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
const arrTwoSumNum = function(nums, target) {
  let resArr = [];
  let control = 1;
  while (control < nums.length) {

    for(let idx = 0; idx < nums.length; idx++) {
      let value1 = nums[idx];
      let value2 = nums[idx + control];
  
      if(value1 + value2 === target) {
        resArr.push(idx, idx + control)
        return resArr
      } 
    }
    control++;
  }
  return `No hay combinaciones para ${target}`;
}
let array = [3,2,3];
console.log(arrTwoSumNum(array, 6));





