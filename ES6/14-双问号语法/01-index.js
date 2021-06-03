const obj = null;

// 表示obj有值就赋值个result，如果obj为null获取者undefined就取 ?? 后面值(无论后面的值是什么),
const result = obj ?? "obj没有值" ; 

console.log(result);