import React from 'react';
import { connect } from 'react-redux'
import Users from './Users'
import { actionsCreatorFollow, actionsCreatorUnfollow, actionsCreatorSetUsers, actionsCreatorSetPage, actionsCreatorSetTotalCount, actionsCreatorisFetching } from '../../Redux/users-reducer'
import axios from 'axios';
import Preloader from '../preloader';

class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.isFetching(true)
      axios
         .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.numberOfPages}&count=${this.props.numberOfUsers}`)
         .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
            this.props.isFetching(false)
         })
   }
   onSetPage = (page) => { 
      this.props.isFetching(true)
      this.props.setPage(page)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.numberOfUsers}`)
         .then(response => { 
            this.props.setUsers(response.data.items)
            this.props.isFetching(false)
          })
   }  

   render() {  
         return <>
                {this.props.fetching 
                  ? <Preloader />
                  :  <Users 
                           users={this.props.users}
                           follow={this.props.follow}
                           unfollow={this.props.unfollow}
                           numberOfPages={this.props.numberOfPages}
                           numberOfUsers={this.props.numberOfUsers}
                           totalUsersCount={this.props.totalUsersCount}
                           onSetPage={this.onSetPage}
                        />
                }
               </>
      }
}

const mapStateToProps = (state) => { 
   return {
      text: state.usersPage.text,
      users: state.usersPage.users,
      numberOfPages: state.usersPage.numberOfPages,
      numberOfUsers: state.usersPage.numberOfUsers,
      totalUsersCount: state.usersPage.totalUsersCount,
      fetching: state.usersPage.isFetching
   }
}

const mapDispatchToProps = (dispatch) =>{
   return {
      follow: (id) => {
         dispatch(actionsCreatorFollow(id))
      },
      unfollow: (id) => {
         dispatch(actionsCreatorUnfollow(id))
      },
      setUsers: (users) => {
         dispatch(actionsCreatorSetUsers(users))
      },
      setPage: (page) => {
         dispatch(actionsCreatorSetPage(page))
      },
      setTotalCount: (number) => {
        dispatch(actionsCreatorSetTotalCount(number)) 
      },
      isFetching: (isFetching) => {
         dispatch(actionsCreatorisFetching(isFetching))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);