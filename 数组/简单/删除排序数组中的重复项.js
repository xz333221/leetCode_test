/**
 *  fileName:删除排序数组中的重复项
 *  time:2019-11-15
 *  todo:给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 示例 1:

 给定数组 nums = [1,1,2],

 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。

 你不需要考虑数组中超出新长度后面的元素。
 示例 2:

 给定 nums = [0,0,1,1,1,2,2,3,3,4],

 函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

 你不需要考虑数组中超出新长度后面的元素。
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//   let map = new Map()
//   let len = nums.length
//   for (let i = 0; i < len; ) {
//     let exist = map.get(nums[i])
//     if (exist !== undefined) {
//       console.log('exit')
//       nums.splice(i, 1)
//       len--
//     } else {
//       map.set(nums[i], i)
//       i++
//     }
//   }
//   return  nums.length
// }

var removeDuplicates = function (nums) {
  let map = new Map()
  let len = nums.length
  let ind = 0
  for (let i = 0; i < len; i++) {
    console.log('nums:',nums)
    let exist = map.get(nums[i])
    if (exist !== undefined) {
      console.log('exit')
      ind++
    } else {
      nums[i-ind] = nums[i]
      map.set(nums[i], i)
    }
  }
  nums.splice(len-ind)
  return  nums.length
}

let arr = [0,0,1,1,1,2,2,3,3,4]
removeDuplicates(arr)
console.log('arr:',arr)
