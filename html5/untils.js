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



