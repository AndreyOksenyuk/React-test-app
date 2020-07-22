import React from 'react';
import { connect } from 'react-redux'
import Users from './Users'
import { follow, unfollow, setUsers, setPage, setTotalCount, isFetching } from '../../Redux/users-reducer'
import axios from 'axios';

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
         return <Users 
                  users={this.props.users}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
                  numberOfPages={this.props.numberOfPages}
                  numberOfUsers={this.props.numberOfUsers}
                  totalUsersCount={this.props.totalUsersCount}
                  onSetPage={this.onSetPage}
                  fetching={this.props.fetching}
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
      fetching: state.usersPage.isFetching
   }
}

export default connect(mapStateToProps, {
   follow, unfollow, setUsers, setPage, setTotalCount, isFetching
})(UsersContainer);