/**
 * Insert sort 插入排序
 * @Author: Junting
 * @Date: 2020-05-22 10:19:32
 * @Last Modified by: Junting
 * @Last Modified time: 2020-05-22 14:05:53
 */

function insertSort(array) {
  let sortedArray = []
  for (let number of array) {
    sortedArray = insert(sortedArray, number)
  }
  return sortedArray;
}

function insert (array, number) {
  if (array.length === 0) {
    return [number]
  }
  let sorted = [];
  let inserted = false;
  for (let num of array) {
    if (number < num && !inserted) {
      inserted = true
      sorted.push(number);
    }
    sorted.push(num);
  }

  if (!inserted) {
    sorted.push(number);
  }
  return sorted;
}

/**
 * Unit Test 插入排序测试
 * @param {Array} array 需要排序的数组
 * @param {Boolean} ascend 升序 或 降序
 */
function insertSortTest(array, ascend) {
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    for (let number of array.slice(i)) {
      if (ascend) {
        if (number < num) {
          return false;
        }
      } else {
        if (number > num) {
          return false;
        }
      }
    }
  }
  return true
}

// 测试下单元测试函数 => 验证单元测试函数正确性
// console.log(insertSortTest([], true)); // true
// console.log(insertSortTest([1, 2, 3, 2, 4], true)); // false
// console.log(insertSortTest([2, 1, 2, 4, 3, 6, 8, 9], true)); // false
// console.log(insertSortTest([1, 2, 3, 3, 6, 8, 9], true)); // true


function performanceTest(f) {
  // console.log(
  //   '%cInsertion Sort Performance Test::',
  //   "background: #19be6b; padding: 5px; color: #fff; border-radius: 5px;"
  // )
  console.time('insert sort performance test');
  f()
  console.timeEnd('insert sort performance test');
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
// console.log('randomArray:', randomArray());

// console.log(insertSortTest(insertSort(arr), true));
performanceTest(function() {
  insertSortTest(insertSort(randomArray(10000)), true);
});
// performanceTest(function() {
//   insertSort(randomArray(100000));
// });
// performanceTest(function() {
//   insertSortTest(insertSort(randomArray(100000000)), true);
// });