import axios from 'axios';

let instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
      headers: {
         'API-KEY': '19d35e01-5453-43df-a4a5-324ffa914553'
      }
})

export let getUserProfile = (userId) => {
   return instance.get(`profile/${userId}`).then(response => {
      return response.data
   });
}
export let getUsers = (numberOfPages, numberOfUsers) => {
   return instance.get(`users?page=${numberOfPages}&count=${numberOfUsers}`).then(response => {
      return response.data
   });
}
export let getFollow = (userId) => {
   return instance.get(`follow/${userId}`).then(response => {
      return response.data
   });
}
export let deleteFollow = (userId) => {
   return instance.delete(`follow/${userId}`).then(response => {
      return response.data
   });
}
export let postFollow = (userId) => {
   return instance.post(`follow/${userId}`).then(response => {
      return response.data
   });
}