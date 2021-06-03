// 封装过滤器优化函数
        // obj  属性对象
        function combineFilterFunc(obj){
            return function(arr) {
                var lastArr = arr;
                for(var prop in obj){
                    // obj[prop] = filterArrByText
                    // obj[prop] = filterArrBySex
                    lastArr = obj[prop](lastArr,state[prop]);
                }
                return lastArr;//将数组返回
            }
        }
        var lastFilterFunc = combineFilterFunc({
            text : filterArrByText, 
            sex : filterArrBySex
        });