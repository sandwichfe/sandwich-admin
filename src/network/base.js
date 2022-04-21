import {request} from './request';


export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {          /*后面的参数 如： http://localhost:8080/home/data/?type=?&page=? */
      type,
      page,
    }
  })
  
}