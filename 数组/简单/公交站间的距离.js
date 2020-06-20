/**
 *  fileName:公交站间的距离
 *  time:2020/5/21
 *  todo:环形公交路线上有 n 个站，按次序从 0 到 n - 1 进行编号。我们已知每一对相邻公交站之间的距离，distance[i] 表示编号为 i 的车站和编号为 (i + 1) % n 的车站之间的距离。

 环线上的公交车都可以按顺时针和逆时针的方向行驶。

 返回乘客从出发点 start 到目的地 destination 之间的最短距离。

  

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/distance-between-bus-stops
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
  let total_fn = (arr) => arr.reduce((a,b) => a + b)
  let arr = distance.slice(Math.min(start,destination),Math.max(start,destination))
  return Math.min(total_fn(arr),total_fn(distance) - total_fn(arr))
};

console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 3));
