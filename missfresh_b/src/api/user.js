import request from "./request";

// 注册
// 域名  https://mallapi.duyiedu.com/ 
export async function user(){
  const data = await request.post('https://mallapi.duyiedu.com/passport/logon',{
    email:"",
    password:"",
    code:'',
    username:"",
  })
  return data;
}