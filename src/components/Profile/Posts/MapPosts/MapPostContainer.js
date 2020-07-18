import { connect } from 'react-redux';
import MapPost from './MapPosts';

let mapStateToProps = (state) => {
   return {
     posts: state.profilePage.posts, 
   }
   
}

const MapPostContainer = connect(mapStateToProps)(MapPost);

export default MapPostContainer;