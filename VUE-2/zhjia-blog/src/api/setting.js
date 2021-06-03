// 导入经过拦截后返回的axios实例
import request from "./request";

// 导出获取全局设置
export async function getSetting(){
  return await request.get("/api/setting");
}