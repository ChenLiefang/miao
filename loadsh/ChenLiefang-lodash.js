var ChenLiefang = {
    chuck: function (array , size){
        let ary = []
        for(var i= 0 ;i<array.length;i +=size){
            ary.push(array.slice(i,i+size))
        }
        return ary
    }
}