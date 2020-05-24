/**
 * Shuffle 洗牌
 * @Author: Junting
 * @Date: 2020-05-23 11:23:19
 * @Last Modified by: Junting
 * @Last Modified time: 2020-05-23 20:33:00
 */

// 一组 Number 数据，随机打乱起顺序
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 循环的方式
function shuffle(array) {
  let arr = [...array];
  return array.map(() => {
    let random_index = Math.floor(Math.random() * arr.length);
    return arr.splice(random_index, 1)[0];
  })
}

// 递归
function shuffleRecursion(array) {
  // let random_array = [];
  function handle(array, random_array = []) {
    // 终止条件
    if (!array.length) {
      return random_array;
    }
    let random_index = Math.floor(Math.random() * array.length);
    let random_number = array.splice(random_index, 1)[0];
    random_array.push(random_number);
    return handle(array, random_array)
  }
  return handle(array);
}

/**
 * 生成随机数组
 * @param {Number} size 生成随机数组长度
 */
function randomArray(size = 100) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * size + 1))
  }
  return array;
}

console.log(shuffle(randomArray()));
console.log(shuffleRecursion(randomArray()));
