/**
 * Matrix multiplication 矩阵乘法
 * @Author: Junting
 * @Date: 2020-05-22 17:42:13
 * @Last Modified by: Junting
 * @Last Modified time: 2020-05-23 20:22:34
 */

// 必备条件:
// 1、矩阵 MA 的行数 = 矩阵 MB 的列数
// MA
// [
//   [1, 0, 2],
//   [-1, 3, 1]
// ]
// X
// MB
// [
//   [3, 1],
//   [2, 1],
//   [1, 0]
// ]
// =
// [
//   [5, 1],
//   [4, 2]
// ]

/**
 * 矩阵乘法
 * @param {Array[Array[number]]} MA 二维数组
 * @param {Array[Array[number]]} MB 二维数组
 * @return {Array[Array[number]]} MC 二维数组
 */
function matrixMultiplication(MA, MB) {
  let MC = []; // O(1)
  // 验证必要条件
  for (let i = 0; i < MA.length; i++) { // O(n^3)
    if(MA[i].length !== MB.length) {
      return console.log('传递的矩阵 MA、MB 不符合矩阵规则')
    }
    // 初始化 MC 矩阵数据格式（二维数组）
    MC[i] = [];
    for (let k = 0; k < MB[i].length; k++) {
      // 初始化二维数组每个值
      MC[i][k] = 0;
      for(let j = 0; j < MA[i].length; j++) {
        let x = MA[i][j];
        let y = MB[j][k]
        MC[i][k] += x * y
      }
    }
  }
  return MC;
}

// 第一组数据
let a1 = [
  [1, 0, 2],
  [-1, 3, 1]
];
let b1 = [
  [3, 1],
  [2, 1],
  [1, 0]
];
let c1 = [[5, 1],[4, 2]];
// 第二组数据
let a2 = [
  [1, 2, 3],
  [4, 5, 6]
];
let b2 = [
  [7, 8],
  [9, 10],
  [11, 12]
];
let c2 = [[58, 64],[139, 154]];

console.log(matrixMultiplication(a1, b1));
console.log(matrixMultiplication(a2, b2));

// 验证矩阵乘法
function matrixMultiplicationTest(M1, M2) {
  return JSON.stringify(M1) === JSON.stringify(M2);
}
console.log(matrixMultiplicationTest(matrixMultiplication(a1, b1), c1));
console.log(matrixMultiplicationTest(matrixMultiplication(a2, b2), c2));
