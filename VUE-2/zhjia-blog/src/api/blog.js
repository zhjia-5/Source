// 导入经过拦截后返回的axios实例
import request from "./request";

/**
 * 分页获取博客
 * 请求地址："/api/blog"
 * 请求方式：get
 * params：表示地址栏？后的字符，根据传参。
 */
export async function getBlogs(categoryId = -1, page = 1, limit = 20) {
  return await request.get("/api/blog", {
    params: {
      categoryId,
      page,
      limit,
    }
  });
}
/**
 * 获取所有博客分类
 * 请求地址："/api/blogtype"
 * 请求方式：get
 */
 export async function getBlogType() {
  return await request.get(("/api/blogtype"));
}

/**
 * 获取单个博客数据
 * 请求地址："/api/blog/:id"
 * 请求方式：get
 */
export async function getOneBlog(id) {
  return await request.get(`/api/blog/${id}`);
}

/**
 * 提交评论
 * 请求地址："/api/comment"
 * 请求方式：post
 * commentInfo:评论信息，对应接口的body
 * 	nickname: "昵称",
 *  content: "评论内容，纯文本",
 *  blogId: <id>	#评论的博客id
 */
export async function postComment(commentInfo){
  return await request.post("/api/comment",commentInfo);
}


/**
 * 分页获取评论
 * 请求地址："/api/comment"
 * 请求方式：get
 * params：表示地址栏 ? 后的字符，根据传参。
 */
export async function getComments(blogId=-1,page=1,limit=10){
  return await request.get("/api/comment",{
    params:{
      blogId,
      page,
      limit,
    }
  });
}

