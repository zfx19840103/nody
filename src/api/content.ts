import request  from '../utils/request'
const API_PREFIX = 'http://localhost:3000';
export const home = () => {
  return request({
    url: API_PREFIX + '/home',
    method: 'get',
  });
}

export const contact = (params: any) => {
  return request({
    url: API_PREFIX + '/contact',
    method: 'post',
    data: params,
  });
}