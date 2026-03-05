import request from '@/api/request'

export const getHouseRentList = (params) => {
  return request({
    url: '/api/house/list',
    method: 'get',
    params
  })
}

export const deleteHouse = (id) => {
  return request({
    url: '/api/house/delete/' + id,
    method: 'delete'
  })
}

export const addHouse = (data) => {
  return request({
    url: '/api/house/add',
    method: 'post',
    data
  })
} 

