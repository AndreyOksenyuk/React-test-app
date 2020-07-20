import React from 'react';
import UserCard from './UserCard/UserCard';
import style from './Users.module.scss';
import axios from 'axios';

class Users extends React.Component {

   constructor(props) {
      super(props);
         axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.setUsers(response.data.items))
   }

   render() {
      return (
         <div className={style.UsersPage}>
            <h1>{this.props.text}</h1>
            <UserCard
               users={this.props.users}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
            />
            <button className={style.btnShoeMore}>Show more</button>
         </div>
      )
   }

}

export default Users;
