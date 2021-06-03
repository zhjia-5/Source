<template>
  <div class="container">
    <!-- 
      修饰符：
        v-model.lazy : 在默认情况下，v-model 在每次 input 事件触发后将输入框的值与
          数据进行同步 (除了上述输入法组合文字时)。你可以添加 lazy 修饰符，从而转为在 change 
          事件之后(失去聚焦后)进行同步。

        v-model.number : 自动将用户的输入值转为数值类型.

        v-model.trim : 过滤用户输入的首尾空白字符;

     -->
    <form class="left">
      <!-- 账号 -->
      <label for="nickname">账号:</label>
      <input type="text" id="nickname" v-model.trim="formData.name">
      <br />
      <!-- 密码 -->
      <label for="password">密码:</label>
      <input type="password" id="password" v-model="formData.password">
      <br />
      <br />
      <div>
        <!-- 复选框 -->
        <!-- 当选中某个复选框时√，会将该复选框的值映射到v-model所绑定的数组中 -->
        <!-- 同时如果v-model所绑定的数组中和vauel值一样则会被选中 -->
        <label>爱好：</label>
        <label>运动<input type="checkbox" value="sport" v-model="formData.hobby"></label>
        <label>电影<input type="checkbox" value="movie" v-model="formData.hobby"></label>
        <label>音乐<input type="checkbox" value="music" v-model="formData.hobby"></label>
        <label>其他<input type="checkbox" value="other" v-model="formData.hobby"></label>
        <label>篮球<input type="checkbox" value="basketball" v-model="formData.hobby"></label>
      </div>
      <br />
      <!-- 单选框 -->
      <div>
        <label>性别</label>
        <label><input type="radio" value="male" v-model="formData.sex">男</label>
        <label><input type="radio" value="female" v-model="formData.sex">女</label>
      </div>
      <br />
      <!-- number -->
      <div>
        <label >年龄：<input type="number" v-model.number="formData.age"></label>
      </div>
      <!-- textarea 文本输入区 -->
      <div>
        <p>个人介绍:</p>
        <textarea  cols="30" rows="5" v-model.lazy="formData.introduce"></textarea>
      </div>
      <br />
      <!-- 选择框 -->
      <div>
        <label>职位:</label>
        <select v-model="formData.job">
          <option value="0">请选择</option>
          <option value="1">前端</option>
          <option value="2">后端</option>
          <option value="3">全栈</option>
        </select>
      </div>
      <br />
      <div>
        <label><input type="checkbox" v-model="formData.remeber">记住我的选择</label>
      </div>
    </form>
    <div class="right">
      <pre>{{ formData }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "abc",
        password: "",
        hobby: ["sport", "movie", "music", "other"],
        sex: "male",
        age: 18,
        introduce: "我是一只小鸭子呀咿呀咿呀哟\n嘎嘎",
        job: "1",
        remember: false,
      },
    };
  },
};
</script>

<style >
.container {
  width: 1000px;
  height: 600px;
  border: 1px solid #ccc;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.left,
.right {
  width: 50%;
  box-sizing: border-box;
  padding: 25px;
}
.right {
  border-left: 1px solid #ccc;
  font-size: 16px;
}
.form-item {
  margin-bottom: 15px;
}
.form-item label {
  margin-right: 5px;
}
.form-item textarea {
  display: block;
  margin-top: 10px;
  resize: none;
  width: 100%;
  height: 100px;
}
</style>
