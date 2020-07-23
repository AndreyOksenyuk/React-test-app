const SET_AUTH_DATA = 'SET_AUTH_DATA'

let initialState = {
   id: null,
   login: null,
   email: null,
   messages: [],
}

let AUTH_REDUCER = function (state = initialState, action) {
   switch (action.type) {
      case SET_AUTH_DATA:
         return {
            ...state,
            ...action.data
         }
   
      default:
         break;
   }
   return state;
}

export let setAuthData = (data) => ({
   type: SET_AUTH_DATA,
   data: data, 
})

export default AUTH_REDUCER;