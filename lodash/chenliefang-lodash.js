var chenliefang = {
    chunk:function(array,size) {
        let ary = []
        for(var i = 0; i < array.length;i +=size){
            ary.push(array.slice(i,i+size))
        }
        return ary
    }
/**
 * 将数组分成多组，每组有size个元素
 * @param ary {array} 需要拆分的数组
 * @param size {number} 拆分的大小
 * @return {Array[][]}
 */,
    compact:function(array){
        let result = []
        for(var i = 0;i < array.length; i++){
            if(array[i]){
                result.push(array[i])
            }
        }
        return result 
    }
    /**
     * 创建一个删除了falsey值的数组 值包括false，null，0，“”，undefined， NaN
     * @param array{array} 需要删除的数组
     * @return 返回过滤后的数组 
     */,
     difference:function(array,...values){
         let map = {};
         let ans = [];
         for(let i = 0; i < array.length; i ++){
             map[array[i]] = true
         }
         for(let i in values){
             for(let j in values[i]){
                 if(map[values[i][j]]){
                     map[values[i][j]] = false;
                 }
                 }
             }
             for(let i in array){
                if(map[array[i]]){
                    ans[ans.length] = array[i]
                }

         }
         return ans 

     }
     /**
      * 返回一个原数组中没有在其余数组中出现的元素集合
      * @param{array} 原数组
      * @param{...values} 其余数组
      * @return {array[][]} 返回过滤后的数组
      */,
     drop:function(array , n=1){
         let result = []
         for(var i = n ;i < array.length; i++){
             result.push(array[i])
         }
         return result 
     } 
     /**
      * 移除数组左边n个元素，返回剩余部分
      * @param{array}原数组
      * @param{number} 需要移除的元素，默认为1
      * @return {array[][]}返回剩余数组
      */,
     fill:function(array, value,start = 0, end = array.length){
          for(var i = start;i < end;i++){
              array[i]= value
          }
          return array
     }
     /**
      * 使用value值来替换Array，从start位置开始，到end位置结束，但不包括end
      * @param{array}要填充改变的数组
      * @param{value} 填充给array的值
      * @param{number} 开始位置，默认是0
      * @param{number} 结束位置，默认array.length
      * @return{array[][]} 返回数组
      */,
     flatten:function(array){
         return array.flat() 
         //flat()方法会按照一个可指定的深度递归遍历数组,默认深度为1，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
     }
     /*let result = []
     for(let i = 0 ;i < array.length ;i++){
         result = result.concat(arrry[i])
     }
     */
    /**
     * 减少一级嵌套深度
     * @param{array}需要减少嵌套层级的数组
     * @return{array}返回减少嵌套层级后的新数组
     */,
    fromPairs:function(pairs){
        let ans = {}
        for(let i in pairs){
            ans[pairs[i][0]]= pairs[i][1]
        }


    }



}