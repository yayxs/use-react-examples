import {COMMON_URL, TIME_OUT} from '../constants/config';
/**
 * @desc 封装公用的请求类
 */
class RequestUtils {
  /**
   * Get 请求
   * @param {*} url 请求地址
   * @param {*} params 请求参数
   */
  static get(url, params) {
    // 拼接url
    if (params) {
      let paramsArray = [];
      //拼接参数
      Object.keys(params).forEach((key) =>
        paramsArray.push(key + '=' + params[key]),
      );
      if (url.search(/\?/) === -1) {
        url += '?' + paramsArray.join('&');
      } else {
        url += '&' + paramsArray.join('&');
      }
    }

    const p1 = new Promise((resolve, reject) => {
      fetch(COMMON_URL + url)
        .then(
          (response) => response.json(),
          //将返回数据转化为json，也可以转为text(),否则无法看到返回数据,且必须回调才可以看到
        )
        .then((responseData) => {
          resolve(responseData);
        })
        .catch((err) => {
          reject(err);
        });
    });

    return p1;
  }

  /**
   * Post 请求
   * @param {*} url 请求地址
   * @param {*} params 请求参数
   */

  static post(url, params) {
    const p1 = new Promise((resolve, reject) => {
      fetch(COMMON_URL + url, {
        method: 'POST',
        ///请求头参数
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params), //body参数，通常需要转换成字符串后服务器才能解析
      })
        .then((response) => response.json())
        .then((responseData) => {
          resolve(responseData);
        })
        .catch((err) => {
          reject(err);
        });
    });

    return p1;
  }
  /**
   * 设置超时的方法
   *
   */

  static requestTimeout() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('链接超时~');
      }, TIME_OUT);
    });
  }
}

export default RequestUtils;
