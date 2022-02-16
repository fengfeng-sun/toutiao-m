// 用户数据交互

import request from '../utils/request'

export const login = data => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data: data
  })
}

export const sendSms = mobile => {
  return request({
    method: 'GET'
    // url: '/app/v1_0/sms/codes/${mobile}'
  })
}
