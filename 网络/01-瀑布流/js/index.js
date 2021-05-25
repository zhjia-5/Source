// 获取图片数据
function getData() {
    ajax({
        url: './data.json',
        success: function (res) {
            console.log(res);
            renderDom(res);
        }
    });
}
// 获取最短的Li
function getMinLi() {
    var oLi = document.getElementsByClassName('col');
    var minHeight = oLi[0].offsetHeight;
    var minIndex = 0;
    for (var i = 1; i < oLi.length; i++ ) {
        if (oLi[i].offsetHeight < minHeight) {
            minHeight = oLi[i].offsetHeight;
            minIndex = i;
        }
    }
    return {
        minHeight: minHeight,
        minIndex: minIndex
    }
}
// 渲染页面
function renderDom(data) {
    var oLi = document.getElementsByClassName('col');
    // 获取图片的宽度
    var imgWidth = oLi[0].offsetWidth - 20 - 20;
    data.forEach(function(item, index) {
        // 创建每张图片的区域
        var oDiv = document.createElement('div');
        oDiv.className = 'item';
        var img = new Image();
        img.src = item.img;
        // item.width / item.height =  img.width / img.height
        // img.height = img.width / (item.width / item.height) = img.width * item.height / item.width
        // 给图片预留高度
        img.height = imgWidth * item.height / item.width;
        var oP = document.createElement('p');
        oP.innerText = item.desc;
        oDiv.appendChild(img);
        oDiv.appendChild(oP);
        // 将图片插入到最短的列
        var minIndex = getMinLi().minIndex;
        oLi[minIndex].appendChild(oDiv);
    })
}


var timer = null;
window.onscroll = function () {
    // 500毫秒之内不断的滚动滚动条的话只进行最后一次的网络请求
    clearTimeout(timer);
    // 获取页面可视高度
    var clientHeight = document.documentElement.clientHeight;
    //  获取滚动的距离
    var scrollTop = document.documentElement.scrollTop;
    var minHeight = getMinLi().minHeight;
    if (minHeight < clientHeight + scrollTop) {
        timer = setTimeout(function () {
            getData();
        }, 500)
    }
}

getData();
