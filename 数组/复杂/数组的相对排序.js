/**
 *  fileName:数组的相对排序
 *  time:2020/5/12
 *  todo:给你两个数组，arr1 和 arr2，

 arr2 中的元素各不相同
 arr2 中的每个元素都出现在 arr1 中
 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。

  

 示例：

 输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
 输出：[2,2,2,1,4,3,3,9,6,7,19]
  

 提示：

 arr1.length, arr2.length <= 1000
 0 <= arr1[i], arr2[i] <= 1000
 arr2 中的元素 arr2[i] 各不相同
 arr2 中的每个元素 arr2[i] 都出现在 arr1 中

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/relative-sort-array
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let arr = []
  for (let i = 0; i < arr1.length;) {
    if (!arr2.includes(arr1[i])) {
      let item = arr1.splice(i, 1)
      console.log('item:',item)
      arr = arr.concat(item)
    } else {
      i++
    }
  }
  arr.sort((a,b) => a - b)
  for (let i = 0; i < arr2.length; ) {
    let num = arr1.indexOf(arr2[i])
    if (num !== -1) {
      arr2.splice(i, 0, arr2[i])
      arr1.splice(num, 1)
      i++
    }else{
      arr2.splice(i, 1)
    }
  }
  return arr2.concat(arr)
}
let arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
console.log(relativeSortArray(arr1, arr2))
