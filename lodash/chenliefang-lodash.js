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
      */
}