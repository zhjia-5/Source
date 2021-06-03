  //封装筛选性别函数 filterArrBySex
  function filterArrBySex(data, sex) {
    if (sex == 'all') {
        return data;
    }else{
        return data.filter(function (ele, index, seft) {
            return ele.sex == sex;
        });
    }
}