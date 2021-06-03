<template>
  <div class="register-container">
    <a-form :form="form" @submit.prevent="handleSubmit">
      <a-form-item v-bind="formItemLayout" label="E-mail">
        <a-input
          v-decorator="[
            'email',
            {
              rules: [
                {
                  type: 'email',
                  message: '输入的电子邮件无效!',
                },
                {
                  required: true,
                  message: '请输入邮箱',
                },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="密码" has-feedback>
        <a-input
          v-decorator="[
            'password',
            {
              rules: [
                {
                  required: true,
                  message: '请输入密码!',
                },
                {
                  validator: validateToNextPassword,
                },
              ],
            },
          ]"
          type="password"
        />
      </a-form-item>
      <a-form-item
        v-bind="formItemLayout"
        label="确认密码"
        has-feedback
      >
        <a-input
          v-decorator="[
            'confirm',
            {
              rules: [
                {
                  required: true,
                  message: '请确认你的密码!',
                },
                {
                  validator: compareToFirstPassword,
                },
              ],
            },
          ]"
          type="password"
          @blur="handleConfirmBlur"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout">
        <span slot="label">
          用户名&nbsp;
          <a-tooltip title="What do you want others to call you?">
            <a-icon type="question-circle-o" />
          </a-tooltip>
        </span>
        <a-input
          v-decorator="[
            'nickname',
            {
              rules: [
                {
                  required: true,
                  message: '请输入用户名!',
                  whitespace: true,
                },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item
        v-bind="formItemLayout"
        label="验证码"
      >
        <a-row :gutter="8">
          <a-col :span="12">
            <a-input
              v-decorator="[
                'captcha',
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入验证码!',
                    },
                  ],
                },
              ]"
            />
          </a-col>
          <a-col :span="12">
            <a-button @click="handleCaptcha">获取验证码</a-button>
          </a-col>
        </a-row>
      </a-form-item>
      <a-form-item v-bind="tailFormItemLayout">
        <a-button type="primary" html-type="submit"> 注册 </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import axios from 'axios';
// import request from '@/api/request';
import alertMessage from '@/utils/alertMessage';
export default {
  data() {
    return {
      confirmDirty: false,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "register" });
  },
  methods: {
    // 注册
     handleSubmit() {
      this.form.validateFieldsAndScroll(async (err, values) => {
        if (!err) {
          const resp = await axios.post('https://mallapi.duyiedu.com/passport/logon',{
            email:values.email,
            password:values.password,
            username:values.nickname,
            code:values.captcha,
          })
          alertMessage({
            content:resp.data.msg,
            type:resp.data.status,
          });
          if(resp.data.status === 'success'){
            this.$router.push({name:'Login'});
          }
        }
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue("password")) {
        callback("您输入的两个密码不一致!");
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(["confirm"], { force: true });
      }
      callback();
    },
    // 获取验证码
    async handleCaptcha(){
      const resp = await axios.post('https://mallapi.duyiedu.com/passport/getCode',{
        email:this.form.getFieldValue('email'),
      })
      alertMessage({
        content:resp.data.msg,
        duration:3000,
        type:resp.data.status,
      });
    }
  },
};
</script>
<style lang='less' scoped>
@import "~@/styles/mixin";
.register-container {
  .center();
  width: 500px;
}
</style>