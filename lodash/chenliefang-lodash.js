var chenliefang = {
    chunk:function(array,size) {
        let ary=[]
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
 */
}