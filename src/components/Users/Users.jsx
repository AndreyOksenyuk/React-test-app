import React from 'react';
import UserCard from './UserCard/UserCard';
import style from './Users.module.scss';
import axios from 'axios';

class Users extends React.Component {
   componentDidMount() {
      axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.numberOfPages}&count=${this.props.numberOfUsers}`)
      .then(response => {
         this.props.setUsers(response.data.items)
         this.props.setTotalCount(response.data.totalCount)
      })
   }
   onSetPage(page){
      this.props.setPage(page)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.numberOfUsers}`)
         .then(response => {this.props.setUsers(response.data.items)})
   }

   render() {
      let pagination = Math.ceil(this.props.totalUsersCount / this.props.numberOfUsers);
      let pages = []
      for (let i=1; i <= pagination; i++) {
         pages.push(i)
      }
      return (
         <div className={style.UsersPage}>
            <h1>{this.props.text}</h1>
            <UserCard
               users={this.props.users}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
            />
            <button className={style.btnShoeMore}>Show more</button>
            <div className={style.pagination}>
               {pages.map(e => {
                  return <span
                           key={e} 
                           className={this.props.numberOfPages === e 
                                       ? style.pagination__pageActive
                                       : style.pagination__page
                                       }
                           onClick={() => {this.onSetPage(e)}}
                        >{e}</span>
               })}  
            </div>
         </div>
      )
   }

}

export default Users;
