import axios from "axios";
import alertMessage from "../utils/alertMessage";

const ins = axios.create();//创建一个带有拦截器功能的axios实例

// 拦截响应数据（response）,每次发送请求的时候都会先运行use(func)方法里面的func函数
ins.interceptors.response.use((resp)=>{
  // 根据接口文档的判断，code === 0 表示响应成功，其他表示失败
  if(resp.data.code !==0 ){
    alertMessage({
      content:resp.data.msg,
      type:"error",
      duration:1500,
    });
    return null;
  }
  return resp.data.data;
});

export default ins;//ins相当于axios