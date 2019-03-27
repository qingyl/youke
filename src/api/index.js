import axios from "axios";
// 秘钥
const AppKey = "tehahusnxb";
export const ajaxGet = (link, res) => {
  res = Object.assign({ AppKey: AppKey }, res);
  return axios.get(link, { params: res });
};
// post请求
export const ajaxPost = (link, res) => {
  return axios.post(link, res, {
    transformRequest: data => {
      var str = [];
      for (var i in data) {
        str.push(encodeURIComponent(i) + "=" + encodeURIComponent(data[i]));
      }
      return str.join("&");
    }
  });
};

// 发送前token做处理发送
axios.interceptors.request.use(
  config => {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
axios.defaults.withCredentials = true;

// 以上是axios的配置

// 爆款
const PyqGoodsUrl = `http://api.xuandan.com/DataApi/PyqGoods`;

export const PyqGoods = res => {
  return ajaxGet(PyqGoodsUrl, res);
};
