import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
   follow,
   unfollow,
   setUsers,
   setPage,
   setTotalCount,
   isFetching,
   disableBtn,
} from '../../Redux/users-reducer';
import {getUsers} from '../../api';

class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.isFetching(true)
      getUsers(this.props.numberOfPages, this.props.numberOfUsers).then(data => {
            this.props.setUsers(data.items)
            this.props.setTotalCount(data.totalCount)
            this.props.isFetching(false)
         })
   }

   onSetPage = (page) => { 
      this.props.isFetching(true)
      this.props.setPage(page)
      getUsers(page, this.props.numberOfUsers).then(data => {
         this.props.setUsers(data.items)
         this.props.isFetching(false)
         })
   }  

   render() {  
         return <Users 
                  users={this.props.users}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
                  numberOfPages={this.props.numberOfPages}
                  numberOfUsers={this.props.numberOfUsers}
                  totalUsersCount={this.props.totalUsersCount}
                  onSetPage={this.onSetPage}
                  fetching={this.props.fetching}
                  portitionSize={this.props.portitionSize}
                  disableSubscribeBtn={this.props.disableSubscribeBtn}
                  disableBtn={this.props.disableBtn}
               />
            }

      
}

const mapStateToProps = (state) => { 
   return {
      text: state.usersPage.text,
      users: state.usersPage.users,
      numberOfPages: state.usersPage.numberOfPages,
      numberOfUsers: state.usersPage.numberOfUsers,
      totalUsersCount: state.usersPage.totalUsersCount,
      fetching: state.usersPage.isFetching,
      portitionSize: state.usersPage.portitionSize,
      disableSubscribeBtn: state.usersPage.disableSubscribeBtn

   }
}

export default connect(mapStateToProps, {
   follow, unfollow, setUsers, setPage, setTotalCount, isFetching, disableBtn
})(UsersContainer);