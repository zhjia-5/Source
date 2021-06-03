 // 后台服务器数据
 var personArr = [
    { name: '刘备', src: './img/4.png', message: '三顾茅庐', sex: 'male' },
    { name: '诸葛亮', src: './img/2.png', message: '草船借箭', sex: 'male' },
    { name: '张飞', src: './img/3.png', message: '一夫当关万夫莫开', sex: 'male' },
    { name: '关羽', src: './img/5.png', message: '过五关斩六将', sex: 'male' },
    { name: '刘丽', src: './img/6.png', message: '女生', sex: 'female' },
    { name: '诸葛清风', src: './img/7.png', message: '亭亭玉立', sex: 'female' },
    { name: '张靓颖', src: './img/1.png', message: '歌手', sex: 'female' }
];
var oUl = document.getElementsByTagName('ul')[0];
var search = document.getElementsByClassName('search')[0];
var state = { text: '', sex: 'all' }//定义一个全局状态对象
// 给按钮注册事件  将类数组转为数组才可以使用forEach循环
var btnArr = [].slice.call(document.getElementsByClassName('btn'));
var lastOnBtn = btnArr[btnArr.length - 1];

// 用后台数据渲染页面
function renderPage(data) {
    var htmlStr = '';
    data.forEach(function (ele, index, self) {
        htmlStr += '<li><img src="' + ele.src + '"><p class="name">' + ele.name + '</p><p class="message">' + ele.message + '</p></li>';
    });
    oUl.innerHTML = htmlStr;// 在页面中生成标签
}
renderPage(personArr);//初始状态 渲染所有数据


 // 改变类名的函数
 function changeOn(ele) {
    ele.className = 'btn on';
    lastOnBtn.className = 'btn';
    lastOnBtn = ele;//将这次改为上次元素
}
//当oninput事件：当框的value发生改变都触发该函数
//通过input的输入值作为filterArrByText的第二个参数去过滤personArr数组，并返回新的数组
search.oninput = function () {
    state.text = this.value;
    renderPage(lastFilterFunc(personArr));
}

btnArr.forEach(function (ele, index, self) {
    ele.onclick = function () {
        changeOn(this);
        var sex = this.getAttribute('sex');//获取属性值，
        state.sex = sex;//并赋值给全局对象state
        renderPage(lastFilterFunc(personArr));  //最后将双重过滤后的数据渲染
    }
});