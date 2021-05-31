import api from './api'

const userService = {
  getUsers: () => api.get('/users'),
  getOneUser: (id: number) => api.get(`/users/${id}`),
  deleteUsers: (id: number) => api.get(`/users/${id}`),
}

export default userService