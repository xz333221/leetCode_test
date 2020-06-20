/**
 *  fileName:test
 *  time:2020/5/11
 *  todo:$END$
 */

function quchong(str){
  let map = new Map()
  let max_num = 0
  let max_str = ''
  for (let i = 0; i < str.length; i++) {
    let num = map.get(str[i])
    console.log('num:',num)
    if(num){
      map.set(str[i],++num)
      if(num>max_num){
        max_num = num
        max_str = str[i]
      }
    }else{
      map.set(str[i],1)
    }
  }

  return[max_str,max_num]
}


console.log(quchong('abbc'));
