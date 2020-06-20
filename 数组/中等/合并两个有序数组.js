/**
 *  fileName:合并两个有序数组
 *  time:2019-10-25
 *  todo:
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m)
  let ind = 0
  let i = 0
  let calc = () => {
    if (ind >= m + n) {
      return false
    } else if (ind===nums1.length||nums2[i] < nums1[ind]) {
      nums1.splice(ind, 0, nums2[i])
      i++
      calc()
    } else {
      ind++
      calc()
    }
  }
  calc()
  return nums1.length
}

let nums1 = [-1,-1,0,0,0,0], m = 4,
  nums2 = [-1,0], n = 2

console.log(merge(nums1, m, nums2, n))
