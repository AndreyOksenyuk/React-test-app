import axios from 'axios';

let instance = axios.create({
   withCredentials: true,

   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': '994c0563-a343-4b38-a674-54b0f1bd315c',  
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
   getUserProfile(userId) {
      return instance.get(`profile/${userId}`).then(response => {
         return response.data
      })
   },
   getUsers(numberOfPages, numberOfUsers) {
      return instance.get(`users?page=${numberOfPages}&count=${numberOfUsers}`).then(response => {
         return response.data
      })
   },
   getUserStatus(userId) {
      return instance.get(`profile/status/${userId}`).then(response => {
         return response.data
      })
   },
   putMyStatus(status) {
      return instance.put(`profile/status`, status)
   },
   putMyPhoto(photo) {
      const formData = new FormData()
      formData.append("image", photo)
      return instance.put(`profile/photo`, formData, {}).then(response => {
         return response.data
      })
   },
   putMyData(data) {
      return instance.put(`profile`, data)
   },
}

export const authAPI = {
   getAuthMe() {
      return instance.get(`auth/me`).then(response => {
         return response.data
      });
   },

   postLogin(email, password, rememberMe, captcha) {
      return instance.post(`auth/login`, { email, password, rememberMe, captcha })
   },
   deleteLogin() {
      return instance.delete(`auth/login`)
   },
   getCaptchaURL() {
      return instance.get(`security/get-captcha-url`)
   },
}


//API News
const newskey = 'deca95af7ec24bd7881b9d59143b9780';
let instanceNews = axios.create({
   baseURL: 'https://newsapi.org/v2/'
})

export let newsAPI = {

   getNewsSearch(country = 'ua') {
      return instanceNews.get(`top-headlines?country=${country}&apiKey=${newskey}`)
   },
}

//API Music
let instanceMusic = axios.create({
   baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
   headers:{
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "a5e8ff1539msh6a02f3c50df5af6p1e57fdjsn96e65aaed7e6",
      "useQueryString": true
   }
})


export let musicAPI = {
   
   getSearchMusic(query, limit=8, index=0, ){
      return instanceMusic.get(`search?q=${query}&index=${index}&limit=${limit}`)
   },

}



