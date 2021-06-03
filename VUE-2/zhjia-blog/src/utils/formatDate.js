export default function(timestamp,showTime=false) {
  // 将参数转为数字
  let date = new Date(+timestamp);
  let year = date.getFullYear();
  // padStart():不满两位的话前面补 0
  let mouth = (date.getMonth() + 1).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");
  let str = `${year}-${mouth}-${day}`;
  if(showTime){
    let hour = date.getHours().toString().padStart(2,"0");
    let minute = date.getMinutes().toString().padStart(2,"0");
    let second = date.getSeconds().toString().padStart(2,"0");
    str += ` ${hour}:${minute}:${second}`;
  }
  return str;
}