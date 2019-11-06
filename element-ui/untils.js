//表格排序时，驼峰式命名法大写字母转为后台可读的下划线
//str:要转化的字符串
//返回值：转化过后的
export const toLine = (str) =>
  str.replace(/([A-Z])/g,"_$1").toLowerCase()

//解决精度问题，目前方案，待调整
//money:用来转换的钱
export const transformMoney = money =>
  parseFloat((money * 100).toFixed(2))

//对象数组按字段排序
// property:属性名
// 用法:arr.sort(compare(key))
export const compare = property => {
  return function(a, b) {
    let value1 = a[property];
    let value2 = b[property];
    return value1 - value2;
  }
}

//针对Element-ui的表格搜索分页进行处理
// param:请求时代的搜索参数
//返回值：处理好的param
export const isSearch = param => {
  Object.keys(param).forEach(key => {
    if(param[key] && key != 'size' &&  key != 'current' ){
      param['size'] = 10;
      param['current'] = 1;
    }
  })
  return param
}

//element-ui自定义排序方案
//后台需求：descs（降）ascs（升）为键  要排序的字段为值
//返回值:处理过的请求参数
export const sortParams = (val,row,param) => {
  delete param["descs"];
  delete param["ascs"];
  let order = val.order || "descs";
  let key = order.startsWith("a") ? "ascs" : "descs";
  param[key] = toLine(val.prop);
  return param;
}
