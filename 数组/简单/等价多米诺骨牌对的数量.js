/**
 *  fileName:等价多米诺骨牌对的数量
 *  time:2020/5/12
 *  todo:$END$
 */
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  function quote(a,b) {
    if((a[0]===b[1]&&a[1]===b[0])||(a[0]===b[0]&&a[1]===b[1])){
      return true
    }
  }
  let num = 0
  for (let i = 0; i < dominoes.length - 1; i++) {
    for (let j = i + 1; j < dominoes.length; j++) {
      if(quote(dominoes[i],dominoes[j])){
        num ++
      }
    }
  }
  return num
};
let dominoes = [[1,2],[2,1],[3,4],[5,6]]
console.log(numEquivDominoPairs(dominoes))
