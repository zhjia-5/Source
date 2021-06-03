/**
 * 事件总线 ：
 * 1，提供监听某个事件的接口
 * 2，提供取消监听的接口
 * 3，触发事件的接口（可传递数据）
 * 4，触发事件后会自动通知监听者
 */

// 用于存储要监听的事件
const listeners = {
  // "event1":[handler1,handle2],
  // "event2":[handler3,handle4],
}

export default{
  // 监听某个事件
  $on(eventName,handler){
    // 如果没有该属性就创建一个空的集合,使用集合可以避免重复
    if(!listeners[eventName]){
      listeners[eventName] = new Set();
    }
    listeners[eventName].add(handler);//add为Set方法
  },

  // 取消监听
  $off(eventName,handler){
    // 如果没有该事件直接返回，如果有则删除
    if(!listeners[eventName]){
      return ;
    }
    listeners[eventName].delete(handler);//delete为Set方法
  },

  // 触发事件
  $emit(eventName,...args){
     // 如果没有该事件直接返回，
    if(!listeners[eventName]){
      return ;
    }
    // 如果有，传递参数数据并执行每个函数
    for(const handler of listeners[eventName]){
      handler(...args);
    }
  }

}