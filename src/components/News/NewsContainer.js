import React, { useEffect } from 'react';
import News from './News';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { NewsCountryHeadlinesTC} from '../../Redux/news-reducer'

const NewsContainer = (props) => {
   useEffect(() => {
      let getNews = (newsTC) => {
         return newsTC()
      }
      getNews(props.NewsCountryHeadlinesTC)
   }, [props.NewsCountryHeadlinesTC])

   return <News {...props}/>
}

let mapStateToProps = (state) => ({
   news: state.newsPage.MainNews,
})

export default compose(
   connect(mapStateToProps, {
      NewsCountryHeadlinesTC,
   })
)(NewsContainer)
