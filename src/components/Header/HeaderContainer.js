import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {setAuthData} from '../../Redux/auth-reducer'
import axios from 'axios';

class HeaderContainer extends React.Component {
   componentDidMount() {
      axios
         .get('https://social-network.samuraijs.com/api/1.0/auth/me',{withCredentials: true})
         .then(response => {
            if (response.data.resultCode === 0){
               this.props.setAuthData({...response.data.data})
            }
         })
   }
   render() {
      return (
         <Header {...this.props.data}/>
      );
   }
}

let mapStateToProps = (state) =>{
   return {
      data: state.auth,
   }
}

export default connect(mapStateToProps, {
   setAuthData,
})(HeaderContainer)
