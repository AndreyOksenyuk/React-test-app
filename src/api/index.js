import axios from 'axios';

let instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
      headers: {
         'API-KEY': '19d35e01-5453-43df-a4a5-324ffa914553'
      }
})

export let followedAPI = {
   getFollow(userId) {
      return instance.get(`follow/${userId}`).then(response => {
         return response.data
      })
   },

   deleteFollow(userId) {
      return instance.delete(`follow/${userId}`).then(response => {
         return response.data
      })
   },

   postFollow(userId) {
      return instance.post(`follow/${userId}`).then(response => {
         return response.data
      })
   },
};

export let userAPI = {
   getUserProfile (userId) {
      return instance.get(`profile/${userId}`).then(response => {
         return response.data
   })},
   getUsers (numberOfPages, numberOfUsers) {
      return instance.get(`users?page=${numberOfPages}&count=${numberOfUsers}`).then(response => {
         return response.data
   })},
   getUserStatus (userId) {
      return instance.get(`/profile/status/${userId}`).then(response => {
         return response.data
   })},
   putMyStatus (status) {
      return instance.put(`/profile/status`, status)}
}

export let getAuthMe = () => {
   return instance.get(`auth/me`).then(response => {
      return response.data 
   });
}

export let postLogin = (email, password, rememberMe) => {
   return instance.post(`/auth/login`, {email, password, rememberMe}) 
}
export let deleteLogin = () => {
   return instance.delete(`/auth/login`) 
}