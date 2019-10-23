//异步函数
//对小程序的API调用写法进行异步改写
// original:小程序API
export const promisify = original => {
  return function(opt) {
    return new Promise((resolve, reject) => {
      opt = Object.assign({
        success: resolve,
        fail: reject
      }, opt)
      original(opt)
    })
  }
}

//场景：轮播图类数据手动分页 array(12) ==> array[array(10),array(2)]
//parma1:arr
//parma2:length(多少个一页)
export const pagingData = (arr, length) => {
  let pages = Math.ceil(arr.length / length);
  let i = 0;
  let swipeArr = [];
  if (pages > 1) {
    while (i < pages) {
      swipeArr.push([]);
      swipeArr[i] = arr.filter((item, index) => parseInt(index / length) == i);
      i++;
    }
    arr = swipeArr
  }
  return arr;
}

/**
 * 本地获取token
 * @param {*} token
 */
export const getAccessToken = function() {
  let tokenStr = uni.getStorageSync('access_token');
  if (!tokenStr) return null;
  let tokenInfo = null;
  try {
    tokenInfo = JSON.parse(tokenStr);
  } catch (e) {
    console.log(e);
    return null;
  }

  let expire = new Date() - 10 * 1000 * 60;
  if (tokenInfo.expire < expire) return null;
  return tokenInfo.access_token;
};


/**
 * 缓存token
 * @param {*} token
 */
export const setAccessToken = function(tokenInfo) {
  tokenInfo.expire = new Date() * 1 + tokenInfo.expires_in * 1000;
  return uni.setStorageSync("access_token", JSON.stringify(tokenInfo));
};

//加入到购物车
export const addTocar = params => {
  let car = uni.getStorageSync("car");
  if (car) {
    let isHave = car.find(item => item.id == params.id);
    if (isHave) {
      isHave.num += params.num;
    } else {
      // store.commit('setCarCount',count+1);
      car.push(params);
    }
    uni.setStorageSync("car", car);
  } else {
    uni.setStorageSync("car", [params]);
  }
}

//获取购物车
export const getShopCar = () => uni.getStorageSync("car");

//设置替换购物车
export const setAlltoCar = parmas => {
  uni.setStorageSync("car", parmas);
}