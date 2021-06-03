// 出口文件
import './banner';//如果后台已经提供数据，将此处代码注释即可
import './blog';
import "./setting";
import "./message";

import Mock from "mockjs";

// 模拟请求延时
Mock.setup({
  timeout:"0-1000"
})