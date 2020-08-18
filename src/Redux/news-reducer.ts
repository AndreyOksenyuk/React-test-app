import {newsAPI} from '../api'
import {newsState} from '../NewsState'


const NEWS_COUNTRY_TOP_HEADLINES = 'NEWS_COUNTRY_TOP_HEADLINES'

export type InitialStateType = {
   MainNews: object
}

let initialState: InitialStateType = {
   MainNews: [],
}

let NEWS_REDUCER = function (state = initialState, action: any): InitialStateType {
   switch (action.type) {
      case NEWS_COUNTRY_TOP_HEADLINES:
         return {
            ...state,
            MainNews: [...action.news]
         }
      default:
         return state
   }
}

let setNewsCountryHeadlines = (news:any) => ({
   type: NEWS_COUNTRY_TOP_HEADLINES,
   news,
})

export let NewsCountryHeadlinesTC = (news:any) => (dispatch: any) => {
   newsAPI.getNewsSearch(news).then(response => {
      if (response.status === 200) {
         dispatch(setNewsCountryHeadlines(response.data.articles))
      }
   }).catch(dispatch(setNewsCountryHeadlines(newsState.articles)))
}

export default NEWS_REDUCER;