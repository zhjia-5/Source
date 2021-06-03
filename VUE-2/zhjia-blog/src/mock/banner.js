import Mock from "mockjs";
import banner1_1 from "../assets/banner/1_1.jpg"
import banner1_2 from "../assets/banner/1_2.jpg"
import banner2_1 from "../assets/banner/2_1.jpg"
import banner2_2 from "../assets/banner/2_2.jpg"
import banner3_1 from "../assets/banner/3_1.jpg"
import banner3_2 from "../assets/banner/3_2.jpg"

// mock会拦截以"/api/banner"开头，方式为get的所有请求，并返回模拟数据
Mock.mock("/api/banner","get",{
  code:0,
  msg:"",
  data:[
    {
      id: "1",
      midImg: banner1_1,
      bigImg: banner1_2,
      title: "凛冬将至",
      description: "人唯有恐惧的时候方能勇敢",
    },
    {
      id: "2",
      midImg: banner2_1,
      bigImg: banner2_2,
      title: "血火同源",
      description: "如果我回头，一切都完了",
    },
    {
      id: "3",
      midImg: banner3_1,
      bigImg: banner3_2,
      title: "听我怒吼",
      description: "兰尼斯特有债必偿",
    },
  ],
});
