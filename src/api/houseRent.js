import request from '@/api/request'

export const getHouseRentList = (params) => {
  return request({
    url: '/api/house/list',
    method: 'get',
    params
  })
}