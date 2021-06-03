/**
 * 
 * @param {*} func 
 * @param {*} duration 
 * @returns 
 * 导入一个函数，返回一个新的函数，该函数必须限制在规定时间内不会重复执行
 */
export default function(func,duration=200){
  let timer = null;
  return (...args)=>{
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, duration);
  }
}