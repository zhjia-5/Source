// 导入经过拦截后返回的axios实例
import request from "./request";

/**
 * 网路请求banner数据
 */
export async function getBanner(){
  return await request.get("/api/banner");//会被mock匹配到并且拦截替换
}
