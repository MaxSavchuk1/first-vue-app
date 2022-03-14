import http from '@/api/instance'

const jsonplaceholder = http('https://jsonplaceholder.typicode.com')

export default {
  getPosts: (limit = 10, page = 1) => jsonplaceholder.get(`/posts?_limit=${limit}&_page=${page}`),

  getPhotos: (limit = 10) => jsonplaceholder.get(`/photos?_limit=${limit}`),

  getTodos: (limit = 3) => jsonplaceholder.get(`/todos?_limit=${limit}`)
}
