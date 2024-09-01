import request from '../utils/request'
export function loginApi (params: any) {
  return request({
    url: 'http://192.168.0.100/user',
    method: 'post',
    data: params,
  });
}
