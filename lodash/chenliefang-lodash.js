var chenliefang = {
    chunk: function(array, size) {
            let ary = []
            for (var i = 0; i < array.length; i += size) {
                ary.push(array.slice(i, i + size))
            }
            return ary
        }
        /**
         * 将数组分成多组，每组有size个元素
         * @param ary {array} 需要拆分的数组
         * @param size {number} 拆分的大小
         * @return {Array[][]}
         */
        ,
    compact: function(array) {
            let result = []
            for (var i = 0; i < array.length; i++) {
                if (array[i]) {
                    result.push(array[i])
                }
            }
            return result
        }
        /**
         * 创建一个删除了falsey值的数组 值包括false，null，0，“”，undefined， NaN
         * @param array{array} 需要删除的数组
         * @return 返回过滤后的数组 
         */
        ,
    difference: function(array, ...values) {
            let map = {};
            let ans = [];
            for (let i = 0; i < array.length; i++) {
                map[array[i]] = true
            }
            for (let i in values) {
                for (let j in values[i]) {
                    if (map[values[i][j]]) {
                        map[values[i][j]] = false;
                    }
                }
            }
            for (let i in array) {
                if (map[array[i]]) {
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
        ,
    drop: function(array, n = 1) {
            let result = []
            for (var i = n; i < array.length; i++) {
                result.push(array[i])
            }
            return result
        }
        /**
         * 移除数组左边n个元素，返回剩余部分
         * @param{array}原数组
         * @param{number} 需要移除的元素，默认为1
         * @return {array[][]}返回剩余数组
         */
        ,
    fill: function(array, value, start = 0, end = array.length) {
            for (var i = start; i < end; i++) {
                array[i] = value
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
         */
        ,
    flatten: function(array) {
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
         */
        ,
    fromPairs: function(pairs) {
            let ans = {}
            for (let i in pairs) {
                ans[pairs[i][0]] = pairs[i][1] //obj[e.name] = e.value;
            }
            return ans;
        }
        /**
         * 将数组转换为key-value 对象
         * @param{array} 需要转化的数组
         * @return{object}返回一个对象
         */
        ,
    head: function(array) {
            if (array === []) {
                return undefined
            }
            return array[0]
        }
        /**
         * 获取数组array的第一个元素
         * @param{array}  要查询的数组
         * @return{}返回数组的第一个元素 
         */
        ,

    indexof: function(array, value, fromIndex = 0) {
            for (let i = fromIndex; i < array.length; i++) {
                if (value == array[i] || (value !== value && array[i] !== array[i])) {
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
         */
        ,
    initial: function(array) {
            let res = []
            for (let i = 0; i < array.length - 1; i++) {
                res.push(array[i])
            }
            return res
        }
        /**
         * 获取数组中除了最后一个元素之外的所有元素（去除数组中的最后一个元素）
         * @param{array} 要查询的数组
         * @return{array} 返回截取后的数组
         */
        ,
    intersection: function(...array) {
            let ans = []


        }
        /**
         * 创建唯一值得数组，这个数组包含所有数组都包含的元素，求交集
         * @param{arrays} 待检查数组
         * @return{array} 返回一个包含所有交集的新数组
         */
        ,
    join: function(array, separator = ',') {
            let str = ''
            for (let i = 0; i < array.length - 1; i++) {
                str += '' + array[i] + separator

            }
            str += '' + array[array.length - 1]
            return str
        }
        /**
         * 将 array 中的所有元素转换为由 separator 分隔的字符串。
         * @param{array} 要转换的数组
         * @param{string} 分隔元素
         * @return{string}返回连接的字符串
         */
        ,
    last: function(array) {
            return array[array.length - 1]

        }
        /**
         * 获取array中的最后一个元素
         * @param{array} 要检索的数组
         * @return(*) 返回array中的最后一个元素 
         */
        ,
    lastIndexOf: function(array, value, fromIndex = array.length - 1) {
            for (let i = fromIndex; i > 0; i--) { //从右到左遍历array值
                if (value == array[i] || (value !== value && array[i] !== array[i])) {
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
         */
        ,
    nth: function(array, n = 0) {
            if (n < 0) {
                return array[array.length + n]
            }
            return array[n]
        }
        /**
         * 获取Array数组的第n个元素，如果n为负数，则返回从数组结尾开始的第n个元素
         * @param{array} 要查询的数组
         * @param{number} 要返回元素的索引
         * @return{*} array数组的第N个元素
         */
        ,
    pull: function(array, ...values) {
            for (let x of values) {
                for (let i = 0; i < array.length; i++) {
                    if (array[i] === x) {
                        array.splice(i, 1)
                    }
                }
            }
            return array

        }
        /**
         * 移除数组中和给定元素相等的值
         * @param{array} 要修改的数组
         * @param{...values}要删除的值
         * @return{array} 返回数组
         */
        ,
    slice: function(array, start = 0, end = array.length) {
            let result = []
            for (let i = start; i < end; i++) {
                result.push(array[i])
            }
            return result

        }
        /**
         * 裁剪数组array,从start开始end结束，但是不包括end
         * @param{array} 要裁剪的数组
         * @param{number} 开始位置
         * @param{number} 结束位置
         * @return{array} 返回数组裁剪部分  
         */
        ,
    reverse: function(array) {
            for (let i = 0, j = array.length - 1; i < j; i++) {
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
                j--
            }
            return array

        }
        /**
         * 反转array,使得第一个元素变成最后一个，第二个变成倒数第二，以此类推
         * @param {array} 要修改的数组
         * @return {array} 返回array
         */
        ,
    sortedIndex(array, value) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] >= value) {
                return i
            }
        }
        return array.length

    }
    /**
     * 使用二进制的方式检索来决定value值应该插入到数组中尽可能小的索引位置，以保证array的排序
     * @param {array} 要检查的排序数组
     * @param {value} 要评估的值
     * @return {number} 返回 value值应该在数组array中插入的索引位置index
     */
    ,
    union: function(array) {
            var result = [];
            for (let i of array) {
                for (let j of array[i]) {
                    if (!result.includes(j)) {
                        result.push(j)
                    }
                }

            }
            return result;
        }
        /**
         * 创建一个按顺序排列的唯一值得数组
         * @param {array} 要检查的数组
         * @return {array} 返回一个新的联合数组
         */
        ,
    unzip: function(array) {
            let res = []
            for (let i = 0; i < array[0].length; i++) { //array[0].length 获取列数
                res[i] = []
                for (let j = 0; j < array.length; j++) { // array.length 获取行数
                    res[i][j] = array[j][i]

                }
            }
            return res;

        }
        /**
         * 除了它接收分组元素的数组，并且创建一个数组，分组元素到打包前的结构
         * @param {} 要处理的分组元素
         * @return {} 返回重组元素的新数组
         */
        ,
    without: function(array, ...values) {
            let res = []
            for (let i of array) {
                if (!values.includes(i)) {
                    res.push(i)
                }
            }
            return res;

        }
        /**
         * 创建一个剔除所有给定值得新数组，返回一个新数组
         * @param {array} 要检查的数组
         * @param {values} 要剔除的值
         * @return {array} 返回过滤后法人新数组
         */
        ,
    xor: function(...array) {
            let res = []
            for (let i of array) {
                for (let j of i) {
                    if (!res.includes(j)) {
                        res.push(j)
                    }
                }

            }
            return res
        }
        /**
         * 得到非交集
         * @param {array} 要检查的数组
         * @return {array} 返回过滤后的新数组
         * 
         */
        ,
    zip: function(...array) {
            let res = []
            let max = 0
            for (let x of array) {
                if (max < x.length) {
                    max = x.length
                }
            }
            for (let i = 0; i < max; i++) {
                let temp = []
                for (let j = 0; j < array.length; j++) {
                    temp.push(array[j][i])

                }
                res.push(temp)
            }
            return res;

        }
        /**
         * 创建一个分组元素的数组，数组的第一个元素包含所给定数组的第一个元素，数组的第二个元素，包含给定数组的第二个元素，以此类推
         * @param {arrays} 要处理的数组
         * @return {Array} 返回分组元素的新数组
         */
        ,
    eq: function(value, other) {
            if (value !== value && other !== other) {
                return true
            }
            return value === other
        }
        /**
         * 比较两者的值，确定他们是否相等
         * @param {value} 要比较的值
         * @param {other} 另一个要比较的值
         * @return {boolean} 返回true or false
         */
        ,
    gt: function(value, other) {
            if (value > other) {
                return true
            }
            return false
        }
        /**
         * 检查value的值是否大于other，如果value 大于 other 返回 true，否则返回 false。
         */
        ,
    gte: function(value, other) {
            if (value >= other) {
                return true
            }
            return false
        }
        /**
         * 检查value的值是否大于等于other，如果value 大于 other 返回 true，否则返回 false。
         */
        ,
    isArguments: function(value) {
            if (!Array.isArray(value) && typeof value == "object" && value.length !== undefined) {
                return true

            }
            return false

        }
        /**
         * 检查value是否是一个类arguement对象 
         */
        ,
    isNaN: function(value) {
            if (typeof value == 'object') {
                return value.toString() == 'NaN'
            }
            return value !== value
        }
        /**
         * 检查 value 是否是 NaN
         * @param {value} 要检查的值
         * @return {boolean} 如果是返回真否则返回假
         */
        ,
    isNull: function(value) {
            if (value == null) {
                return true
            } else {
                return false
            }
        }
        /**
         * 检查value的值是不是null
         */
        ,
    it: function(value, other) {
            if (value < other) {
                return true
            }
            return false
        }
        /**
         * 检查value的值是否小于other，如果value 大于 other 返回 true，否则返回 false。
         */
        ,
    ite: function() {
            if (value <= other) {
                return true
            }
            return false
        }
        /**
         * 检查value的值是否小于等于other，如果value 大于 other 返回 true，否则返回 false。
         */
        ,
    add: function(augend, addend) {
            return augend + addend
        }
        /**
         * 两个数相加
         */
        ,
    ceil: function(n, p = 0) {
            let temp = n * Math.pow(10, p)
            if (temp - parseInt(temp) > 0) {
                temp = parseInt(temp) + 1
            } else {
                temp = parseInt(temp)
            }
            let f = p
            if (p < 0) {
                f = -p
            }
            return parseInt(temp) / Math.pow(10, p)
        }
        /**
         * 根据 precision（精度） 向上舍入 number。（注： precision（精度）可以理解为保留几位小数。）
         * @param {number}  要向上舍入的值
         * @param {number} 向上舍入的精度
         * @return {number} 返回向上舍入的值
         */
        ,
    divide: function(dividend, divisor) {
            return dividend / divisor
        }
        /**
         * 两个数相除
         * @param {number} 相除的第一个数
         * @param {number} 相除的第二个数
         * @return {number} 返回商数
         */
        ,
    floor: function(n, p = 0) {
            let exp = 10 ** -p
            return n - (n % exp)
        }
        /**
         * 根据 precision（精度） 向下舍入 number。（注： precision（精度）可以理解为保留几位小数。）
         * @return {number} 向下舍入的值
         */
        ,
    max: function(array) {
            if (!array || array.length == 0)
                return undefined
            let max = array[0]
            for (let i = 0; i < array.length; i++) {
                if (max < array[i]) {
                    max = array[i]
                }
            }
            return max
        }
        /**
         * 计算 array 中的最大值。 如果 array 是 空的或者假值将会返回 undefined。
         */
        ,
    mean: function(array) {
            let sum = 0
            for (let i = 0; i < array.length; i++) {
                sum = sum + array[i]
            }
            return sum / array.length

        }
        /**
         * 计算Array的平均值
         */
        ,
    min: function(array) {
            if (!array || array.length == 0)
                return undefined
            let min = array[0]
            for (let i = 0; i < array.length; i++) {
                if (min > array[i]) {
                    min = array[i]
                }
            }
            return min

        }
        /**
         * 计算Array的最小值
         */
        ,
    multiply: function(multiplier, multiplicand) {
            return multiplier * multiplicand
        }
        /**
         * 两个数相乘
         */
        ,
    round: function(number, precision = 0) {
            let ans = Math.pow(10, precision) * number
            ans = Math.round(ans)
            ans /= Math.pow(10, precision)
            return ans
        }
        /**
         *根据precision 精度，四舍五入
         */
        ,
    subtract: function(minuend, subtrahend) {
            return minuend - subtrahend
        }
        /**
         * 两数相减
         */
        ,
    sum: function(array) {
            let sum = 0
            for (let i of array) {
                sum += i
            }
            return sum

        }
        /**
         * 计算Array值的总和
         */
        ,
    defaults: function(object, ...sources) {
            for (let i of sources) { //遍历source这个数组，i是对象的值
                for (let j in i) { //遍历i这个对象值，得到对应属性名j
                    if (!(j in object)) { //判断 j 的属性名是否在object 这个对象里面
                        object[j] = i[j] // 如果j 里面没有这个属性名，通过这个方法可增加一个属性名

                    }
                }
            }
            return object
        }
        /**
         *分配来源对象到目标对象上，来源对象从左到右，一旦设置了相同属性的值，后续的值将被忽略
         @param {object} 目标对象
         @param {sources} 来源对象
         @return {object} object的值将被改变
         */
        ,
    values: function(object) {
        let arr = []



    }









}