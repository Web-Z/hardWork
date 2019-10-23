//获取url参数
//key:要获取的键名
//用法：getUrlParam('name')
export const getUrlParam = (key) => {
  const reg = new RegExp(`${key}=[^&]+`);
  const str = location.search.match(reg);
  if (!str) return null;
  return str[0].replace(new RegExp(`^${key}=`), "");
};

//获取指定日期ios兼容写法
export const getDate = (time) => {
  let now = time ? new Date() : new Date(time);
  if(time){
    now = now.getFullYear() > 0 ? now : new Date(Date.parse(time.replace(
      /-/g, "/")));
  }
  return now;
}

//用户判断目标日期是否在指定范围内
//days:天数
//targetDate:指定天数
//返回值：Boolean值
let isIwantDate = (days, targetDate) => {
  let now = new Date();
  //把现在的时间往前推指定天数,之后的订单都是需要的
  now.setDate(now.getDate() - days);
  let nowFormatter = new Date(`${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()}`);
  //ios兼容
  let target = new Date(Date.parse(targetDate.substr(0, 10).replace(/-/g, "/")));
  //获取时间差(由于忽略了时分秒,得到的都是86400000倍数或0)
  let cha = target - nowFormatter;
  //昨天不包括今天,单独处理
  if (days == 1) {
    return cha == 0;
  } else {
    return cha > 0 || cha == 0;
  }
}



