import request from '../utils/request'
console.log(request)
export function applyRefund (params: any) {
  return request({
    url: 'http://182.92.186.149:9008/meeting/data',
    method: 'post',
    data: params,
  });
}

export const adminLoginApi = (params: any) =>
  request.post("http://182.92.186.149:9008/meeting/data1", params)