/*
 * @Author: Fone丶峰
 * @Date: 2020-03-05 11:32:04
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 10:04:54
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */

/**
 * 获取文件的后缀
 * @param {*} file
 */
export const getType = file => file.substr(file.lastIndexOf('.') + 1);

/**
 * 请求封装
 * @param {*} options
 * @param {*} file
 */
export function fetch(options, file) {
  if (typeof XMLHttpRequest === 'undefined') {
    return;
  }
  const xhr = new XMLHttpRequest();
  const action = options.action;
  if (xhr.upload) {
    xhr.upload.onprogress = function progress(e) {
      if (e.total > 0) {
        e.percent = e.loaded / e.total * 100;
      }
      options.uploadProgress(e.percent);
    };
  }
  const formData = new FormData();
  formData.append(options.name, file, options.fileName);
  for (const key in options.data) {
    formData.append(key, options.data[key]);
  }
  // 成功回调
  xhr.onload = (e) => {
    const response = e.target.response;
    if (xhr.status < 200 || xhr.status >= 300) {
      options.uploadError(response);
      return;
    }
    options.onload(response);
  };
  // 出错回调
  xhr.onerror = (e) => {
    const response = e.target.response;
    options.uploadError(response);
  };
  // 请求结束
  xhr.onloadend = (e) => {
    const response = e.target.response;
    options.uploadLoadend(response);
  };
  xhr.open('post', action, true);
  const headers = options.headers;
  for (const key in headers) {
    if (headers[key] !== null) {
      xhr.setRequestHeader(key, headers[key]);
    }
  }
  xhr.send(formData);
}