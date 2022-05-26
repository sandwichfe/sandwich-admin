import {request} from './request';


export function getBase(param1, param2) {
  return request({
    url: '/base/getBase',
    params: {          /*后面的参数 如： http://localhost:8080/home/data/?type=?&page=? */
    param1,
    param2,
    }
  })}

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


