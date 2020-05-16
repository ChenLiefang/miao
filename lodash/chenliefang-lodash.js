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
            ans[pairs[i][0]]= pairs[i][1] //obj[e.name] = e.value;
        }
        return ans;
    }
    /**
     * 将数组转换为key-value 对象
     * @param{array} 需要转化的数组
     * @return{object}返回一个对象
     */,
    head:function(array){
        if(array===[]){ 
            return undefined
        }
        return array[0]
    }
        /**
         * 获取数组array的第一个元素
         * @param{array}  要查询的数组
         * @return{}返回数组的第一个元素 
         */,
    
    indexof:function(array, value,fromIndex=0){
        for(let i = fromIndex;i<array.length;i++){
            if(value==array[i]|| (value !==value && array[i] !==array[i])){
            return i
         } 
        }
        return -1
    }
        /**
         * 等值比较，返回首次value在数组array中被找到的索引值，如果fromIndex为负值，将从数组尾端进行匹配，匹配不到返回-1
         * @param{array}需要查找的数组
         * @param(value)需要查找的值
         * @param{number}开始查询的位置
         * @return 返回value在数组中索引位置，没有找到返回为-1
         */,
    initial:function(array){
        let res = []
        for(let i = 0 ; i < array.length - 1;i++){
            res.push(array[i])
        }
        return res
    }
   /**
    * 获取数组中除了最后一个元素之外的所有元素（去除数组中的最后一个元素）
    * @param{array} 要查询的数组
    * @return{array} 返回截取后的数组
    */,
    intersection:function(...array){
        let ans = []


    }
    /**
     * 创建唯一值得数组，这个数组包含所有数组都包含的元素，求交集
     * @param{arrays} 待检查数组
     * @return{array} 返回一个包含所有交集的新数组
     */,
    join:function(array,separator = ','){
        let str = ''
        for(let i = 0; i < array.length - 1 ;i++){
            str += '' + array[i] + separator

        }
        str += ''+array[array.length-1]
        return str 
    }
    /**
     * 将 array 中的所有元素转换为由 separator 分隔的字符串。
     * @param{array} 要转换的数组
     * @param{string} 分隔元素
     * @return{string}返回连接的字符串
     */,
    last:function(array){
        return array[array.length-1]

    }
    /**
     * 获取array中的最后一个元素
     * @param{array} 要检索的数组
     * @return(*) 返回array中的最后一个元素 
     */,
    lastIndexOf:function(array, value, fromIndex = array.length-1){
        for(let i = fromIndex ; i > 0 ; i --){ //从右到左遍历array值
            if(value==array[i]|| (value !==value && array[i] !==array[i])){
            return i
         } 
        }
      return -1
    }
    /**
     * 等值比较，返回首次value在数组array中被找到的索引值
     * @param{array}要搜索的数组
     * @param{value} 要搜索的值
     * @param{formindex}开始搜素的索引值
     * @return{number}返回匹配的索引值
     */,
     nth:function(array, n=0){  
         if(n<0){
             return array[array.length + n ]
         }
         return array[n]
     }
     /**
      * 获取Array数组的第n个元素，如果n为负数，则返回从数组结尾开始的第n个元素
      * @param{array} 要查询的数组
      * @param{number} 要返回元素的索引
      * @return{*} array数组的第N个元素
      */,
     pull:function(array , ...values){
          let ans = []
          for(let i = 0; i < array.length;i++){
              if(value != array[i]){
                  ans.push = array[i]

              }
              return ans
          }

     }
     /**
      * 移除数组中和给定元素相等的值
      * @param{array} 要修改的数组
      * @param{...values}要删除的值
      * @return{array} 返回数组
      */
}