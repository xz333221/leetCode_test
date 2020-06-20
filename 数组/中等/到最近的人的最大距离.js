/**
 *  fileName:到最近的人的最大距离
 *  time:2020-1-6
 *  todo:在一排座位（ seats）中，1 代表有人坐在座位上，0 代表座位上是空的。

 至少有一个空座位，且至少有一人坐在座位上。

 亚历克斯希望坐在一个能够使他与离他最近的人之间的距离达到最大化的座位上。

 返回他到离他最近的人的最大距离。

 示例 1：

 输入：[1,0,0,0,1,0,1]
 输出：2
 解释：
 如果亚历克斯坐在第二个空位（seats[2]）上，他到离他最近的人的距离为 2 。
 如果亚历克斯坐在其它任何一个空位上，他到离他最近的人的距离为 1 。
 因此，他到离他最近的人的最大距离是 2 。
 示例 2：

 输入：[1,0,0,0]
 输出：3
 解释：
 如果亚历克斯坐在最后一个座位上，他离最近的人有 3 个座位远。
 这是可能的最大距离，所以答案是 3 。
 提示：

 1 <= seats.length <= 20000
 seats 中只含有 0 和 1，至少有一个 0，且至少有一个 1。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/maximize-distance-to-closest-person
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  let ind1_arr = []
  let len = seats.length
  for (let i = 0; i < len; i++) {
    if(seats[i]===1){
      ind1_arr.push(i)
    }
  }
  // console.log('ind1_arr:',ind1_arr)
  let max_gap = 0
  let len2 = ind1_arr.length
  for (let i = 1; i < len2; i++) {
    max_gap = Math.max(ind1_arr[i]-ind1_arr[i-1] , max_gap)
  }
  // console.log('max_gap:',max_gap)
  let max1 = Math.floor(max_gap/2)
  let max2 = len - ind1_arr[ind1_arr.length - 1] - 1
  let max3 = ind1_arr[0]
  return Math.max(max1,max2,max3)
};
console.log(maxDistToClosest([1, 0, 0, 0, 1, 0, 1]))
