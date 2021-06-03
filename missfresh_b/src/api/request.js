import axios from 'axios';
import alertMessage from '@/utils/alertMessage';

const ins = axios.create();//创建一个带有拦截器功能的axios实例

// 拦截响应数据（response），每次发送请求的时候都会先运行use
ins.interceptors.response.use((resp)=>{
  if(resp.data.status === 'fail'){
    alertMessage({
      content:resp.data.msg,
      type:"fail",
      duration:1500,
    });
    return null;
  }
  return resp.data.data;
});
export default ins;









