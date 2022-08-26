import {request} from '@/plugins/request'

export const getArticles = params => {
  return request({
    url: '/api/articles',
    method: 'GET',
    params,
  })
}
export const getTags = params => {
    return request({
      url: '/api/tags',
      method: 'GET',
      params,
    })
  }