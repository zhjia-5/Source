// 用于当前系统所有的事件绑定
function bindEvent() {
    // 点击左侧导航栏
    var menu = document.querySelector('.menu');
    menu.onclick = function (e) {
        // ele.tagName返回的标签名为大写
        if (e.target.tagName === 'DD') {
            // 获取自定义的data-di值
            // var id = e.target.getAttribute(data-id);
            var id = e.target.dataset.id;
            var content = document.getElementById(id);

            // 内容区切换
            content.style.display = 'block';
            var contentSiblings = getSiblings(content);
            for (var i = 0; i < contentSiblings.length; i++) {
                contentSiblings[i].style.display = 'none';
            }
            
            // 导航栏背景颜色切换
            e.target.classList.add('active');
            var targetSiblings = getSiblings(e.target);
            for (var i = 0; i < targetSiblings.length; i++) {
                targetSiblings[i].classList.remove('active');
            }
        }
    }
    // 点击新增
    var addStudentBtn = document.getElementById('add-student-btn');
    addStudentBtn.onclick = function (e) {
        // 因为form表单在有action属性时会有一个跳转事件，即使没有action属性也会刷新页面。
        // 此处需ajax请求不需要跳转，所以阻止默认事件。
        e.preventDefault();
        var studentAddForm = document.getElementById('add-student-form');
        var result = getFormData(studentAddForm);
        console.log(result.data);
        //如果用户输入信息正确
        if (result.status === 'success') {
            $.ajax({
                type: 'get',
                url: 'http://api.duyiedu.com/api/student/addStudent',
                data: result.data,
                dataType: 'json',
                success: function (response) {
                    alert(response.msg);
                    location.reload();//重新加载页面
                },
                error: function (response) {
                    alert(response.msg);
                }
            });
        } else {
            alert(result.msg);
        }
    }

    // 点击编辑和删除。在父级tbody上绑定点击的事件  无论是哪个子元素被点击都可以利用事件冒泡事件触发父元素身上的事件
    var tbody = document.getElementById('student-list-tbody');
    tbody.onclick = function (e) {
        // 判断点击目标的类名列表是否包含“remove”
        if (e.target.classList.contains('remove')) {
            var index = getStudentIndex(e.target);//获取当前点击按钮对应行的角标
            var sNo = tbody.children[index].firstElementChild.innerHTML;//获取学号
            console.log(sNo);
            var isDel = confirm("是否删除该学生？" + sNo);
            if (isDel) {//弹框确认是否删除信息
                $.ajax({
                    type: 'get',
                    url: 'http://api.duyiedu.com/api/student/delBySno',
                    data: {
                        appkey: 'zhjia_1611123253059',
                        sNo: sNo
                    }
                });
                location.reload();//删除完后重新加载页面
            }
            // 编辑学生信息
        } else if (e.target.classList.contains('edit')) {
            var index = getStudentIndex(e.target);//获取当前点击按钮对应行的角标
            var formEditForm = document.getElementById('edit-student-form');
            var modal = document.getElementsByClassName('modal')[0];
            modal.style.display = 'block';//显示遮罩层和编辑信息
            modal.onclick = function (e) {
                // 取消事件冒泡方法一：
                // 判断点击的目标是否为本身，如果过点击到编辑框则不会转为display:none
                if (e.target === this) {
                    this.style.display = 'none' // 点击遮罩层就隐藏遮罩层
                }
            }
            // 取消冒泡事件方法二：modalmontent.onclick = function (ev) { ev.stopPropagation();}
            // 编辑表单渲染
            $.ajax({
                type: 'get',
                url: 'http://api.duyiedu.com/api/student/findAll',
                dataType: 'json',
                data: {
                    appkey: 'zhjia_1611123253059',
                },
                success: function (response) {
                    var data = response.data[index];//获取index对应的学生数据
                    for (var prop in data) {//判断传回来的数据里和编辑表单的数据是否有相同的属性，如果有就回填
                        if (formEditForm[prop]) {
                            formEditForm[prop].value = data[prop];
                        }
                    }
                },
                error: function (response) {
                    alert(response.msg);
                }
            });

            //点击提交按钮
            var submitBtn = document.getElementById('edit-student-btn');
            submitBtn.onclick = function (e) {
                e.preventDefault();
                var result = getFormData(formEditForm);
                if (result.status == 'success') {
                    $.ajax({
                        type: 'get',
                        url: 'http://api.duyiedu.com/api/student/updateStudent',
                        data: result.data,
                        dataType: 'json',
                        success: function (response) {
                            alert('修改成功！');
                            location.reload();//重新加载页面
                        },
                        error: function (response) {
                            alert(response.msg);
                        }
                    });
                } else {
                    return result.msg;
                }
            }
        }
    }
}
bindEvent();

// 获取表单数据
function getFormData(form) {
    // 通过form表单方法可以获取name属性的值（也就是input的value）
    // 如果该元素没有name属性，就会获取id值
    var name = form.name.value;
    var sex = form.sex.value;//获取用户选中的值
    var email = form.email.value;
    var sNo = form.sNo.value;
    var birth = form.birth.value;
    var phone = form.phone.value;
    var address = form.address.value;
    // 定义一个对象用来存储表单的状态
    var result = {
        data: {},
        msg: '',
        status: 'success'
    }
    // 只要用户有一项没有输入值就不能提交
    if (!name || !email || !sNo || !birth || !phone || !address) {
        result.status = 'false';
        result.msg = "信息不全，请重新编辑";
        return result;
    }
    // 邮箱：^ ：以这个规则开头；$：以这个规则结尾；
    // [\w.]+ : 单词字符和.组合出现多次;   @:函数@符号; \.:函数.符号
    // (com|cn|net)：单与表示只要出现其中一个就可以
    var emailReg = /^[\w.]+@[\w.]+\.(com|cn|net)$/;
    if (!emailReg.test(email)) {
        result.status = 'false';
        result.msg = "邮箱格式不正确！";
        return result;
    }
    // 学号为：4~16为数字
    var sNoReg = /^\d{4,16}$/;
    if (!sNoReg.test(sNo)) {
        result.status = 'false';
        result.msg = "学号必须为4~16位数字！";
        return result;
    }
    // 出生年在1900之后
    if (birth <= 1900) {
        result.status = 'false';
        result.msg = "出生年不符合规范";
        return result;
    }
    // 手机号为11位，以一开头，第二位为[3456789]的数字，\d{9}：后面9位也为数字
    var phoneReg = /^1[3456789]\d{9}$/;
    if (!phoneReg.test(phone)) {
        result.status = 'false';
        result.msg = "请确认您的手机号码是否正确";
        return result;
    }
    // 将数据存储到result对象当中
    result.data = {
        appkey: 'zhjia_1611123253059',
        name,
        sex,
        email,
        sNo,
        birth,
        phone,
        address
    }
    //返回对象
    return result;
}

// 发送ajax请求
$.ajax({
    type: 'get',
    url: 'http://api.duyiedu.com/api/student/findAll',
    dataType: 'json',
    data: {
        appkey: 'zhjia_1611123253059',
    },
    success: function (response) {
        renderData(response);
    },
    error: function (response) {
        alert(response.msg);
    }
});

// 渲染页面函数
function renderData(response) {
    var str = '';
    response.data.forEach(function (ele) {
        ele.sex = ele.sex == 0 ? '男' : '女';
        str += `
            <tr>
                <td>`+ ele.sNo + `</td>
                <td>`+ ele.name + `</td>
                <td>`+ ele.sex + `</td>
                <td>`+ ele.email + `</td>
                <td>`+ ele.birth + `</td>
                <td>`+ ele.phone + `</td>
                <td>`+ ele.address + `</td>
                <td>
                    <button class="btn edit">编辑</button>
                    <button class="btn remove">删除</button>
                </td>
            </tr>
    `;
    });
    document.getElementById('student-list-tbody').innerHTML = str;
}

// 获取当前点击按钮所在tr的index的函数，返回一个number
function getStudentIndex(btn) {
    var trEle = btn.parentElement.parentElement;//获取当前点击按钮所对应的tr
    var trSiblings = trEle.parentElement.children;
    for (var i = 0; i < trSiblings.length; i++) {
        if (trSiblings[i] === trEle) {
            return i;
        }
    }
}


// 获取node节点的所有兄弟节点
function getSiblings(node) {
    var parentNode = node.parentNode;
    var children = parentNode.children;
    var siblings = [];
    for (var i = 0; i < children.length; i++) {
        if (children[i] != node) {
            siblings.push(children[i]);
        }
    }
    return siblings;//返回数组
}