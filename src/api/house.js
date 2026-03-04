import request from '@/api/request'

export function getHouseList(params) {
  return request({
    url: '/api/house/list',
    method: 'get',
    params
  })
}