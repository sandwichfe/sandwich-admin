import {request} from './request';


export function getBase(param1, param2) {
  return request({
    url: '/base/getBase',
    params: {          /*后面的参数 如： http://localhost:8080/home/data/?type=?&page=? */
    param1,
    param2,
    }
  })}

  export  function login(username,password) {
    return request({
      url: '/login',
      method:'post',
      params: {     
        username,
        password
      }
    })
  }


  export  function getIp() {
    return request({
      url: '/base/getRequestIp',
      params: {          
      }
    })
  }

  // 访问列表
  export  function getViewList(pageNum,pageSize) {
    return request({
      url: '/base/getViewList',
      params: {     
        pageNum,
        pageSize
      }
    })
  }


// 上传文件
export function upLoadFile(param) {
  return request({
    url: '/base/uploadFile',
    method: 'post',
    // params: param,
    data: param,
    headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' },
  })
}

// 服务器信息
export  function getServer() {
  return request({
    url: '/monitor/server',
    params: {          
    }
  })
}


export function propToYml(propStr) {
  return request({
    url: '/formatConvert/propToYml',
    method: 'post',
    params: {
      propStr
    },
  })
  }

  export function ymlToProp(ymlStr) {
    return request({
      url: '/formatConvert/ymlToProp',
      method: 'post',
      params: {
        ymlStr
      },
    })
  }
