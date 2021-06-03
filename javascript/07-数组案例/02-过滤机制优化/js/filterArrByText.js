// 封装过滤文本函数 filterArrByText
function filterArrByText(data, text) {
    // 如果inuput输入框text为空就直接返回数据，不在去执行后面的代码(!null == true) 
    if (!text) { 
        return data; 
    }else{
        return data.filter(function (ele, index, self) {
            // filter函数通过返回true false判断是否则被筛选出来
            // indexOf(text),如果包含text则返回对应索引，如果不包含返回-1.
            // 如果 indexOf(text)返回-1，则  -1 != -1 为  false   不返回
            // 如果 indexOf(text)返回 1，则   1 != -1 为  true    返回
            return ele.name.indexOf(text) != -1;        
        });            
    }
}                                                   
                                                    