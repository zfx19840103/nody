import request from '../utils/request'
const API_PREFIX = 'http://localhost:3000';
export const login = (params: any) => {
  return request({
    url: API_PREFIX + '/login',
    method: 'post',
    data: params,
  });
}
