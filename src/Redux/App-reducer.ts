const SET_ERROR: string = 'SET_ERROR'

let initialState = {
   Error: null as null | string,
   textError: null as null | string,
}
export type InitialStateType = typeof initialState

const APP_REDUCER = (state = initialState, action: any):InitialStateType => {
   switch (action.type) {
      case SET_ERROR:
         return {
            Error: action.error,
            textError: action.text,
         }
      default:
         return state
   }
}

const setErrorAC = (error: string | null, text: string | null) => ({
   type: SET_ERROR,
   error, text
})

export const setErroTC = (error: string, text: string) => async (dispatch: any) => {
   await dispatch(setErrorAC(error, text))
   setTimeout(() => {
      dispatch(setErrorAC(null, null))
   }, 4000);
}


export default APP_REDUCER;