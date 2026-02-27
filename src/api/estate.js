import request from './request'

export function getHouseList(params) {
  return request.get('/api/house/list', { params })
}