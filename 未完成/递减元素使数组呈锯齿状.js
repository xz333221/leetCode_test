/**
 *  fileName:递减元素使数组呈锯齿状
 *  time:2020/6/24
 *  todo:给你一个整数数组 nums，每次 操作 会从中选择一个元素并 将该元素的值减少 1。

 如果符合下列情况之一，则数组 A 就是 锯齿数组：

 每个偶数索引对应的元素都大于相邻的元素，即 A[0] > A[1] < A[2] > A[3] < A[4] > ...
 或者，每个奇数索引对应的元素都大于相邻的元素，即 A[0] < A[1] > A[2] < A[3] > A[4] < ...
 返回将数组 nums 转换为锯齿数组所需的最小操作次数。

  

 示例 1：

 输入：nums = [1,2,3]
 输出：2
 解释：我们可以把 2 递减到 0，或把 3 递减到 1。
 示例 2：

 输入：nums = [9,6,1,6,2]
 输出：4
  

 提示：

 1 <= nums.length <= 1000
 1 <= nums[i] <= 1000

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/decrease-elements-to-make-array-zigzag
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function (nums) {
  if (nums.length === 1) return 0
  let nums1 = [...nums]
  let t1 = 0
  let ind = 1
  while (ind < nums1.length) {
    while (ind % 2 === 0 && nums1[ind] >= nums1[ind - 1]) {
      nums1[ind]--
      t1++
    }
    while (ind % 2 === 1 && nums1[ind] <= nums1[ind - 1]) {
      nums1[ind]++
      t1++
    }
    ind++
  }
  let nums2 = [...nums]
  let t2 = 0
  let ind2 = 1
  while (ind2 < nums2.length) {
    while (ind2 % 2 === 0 && nums2[ind2] <= nums2[ind2 - 1]) {
      nums2[ind2]++
      t2++
    }
    while (ind2 % 2 === 1 && nums2[ind2] >= nums2[ind2 - 1]) {
      nums2[ind2]--
      t2++
    }
    ind2++
  }
  return Math.min(t1,t2)

}
console.log(movesToMakeZigzag([1, 2, 3]))
