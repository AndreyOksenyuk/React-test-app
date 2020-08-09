const SET_ERROR = 'SET_ERROR'

let initialState = {
   Error: null,
   textError: null,
}

const APP_REDUCER = (state = initialState, action) => {
   switch (action.type) {
      case SET_ERROR:
         return{
            Error: action.error,
            textError: action.text,
         }
      default:
         return state
   }
}

const setErrorAC = (error, text) => ({
   type: SET_ERROR,
   error, text
})

export const setErroTC = (error, text) => async (dispatch) => {
   await  dispatch(setErrorAC(error, text))
   setTimeout(() => {
      dispatch(setErrorAC(null, null))
   }, 4000);
}



export default APP_REDUCER;