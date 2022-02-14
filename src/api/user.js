// 用户数据交互

import request from '../utils/request'

export const login = data => {
  return request({
    method: 'POST',
    url: '',
    data: data
  })
}
