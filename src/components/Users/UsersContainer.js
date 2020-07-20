import { connect } from 'react-redux'
import Users from './Users'
import { actionsCreatorFollow, actionsCreatorUnfollow, actionsCreatorSetUsers, actionsCreatorSetPage, actionsCreatorSetTotalCount } from '../../Redux/users-reducer'

const mapStateToProps = (state) => { 
   return {
         text: state.usersPage.text,
         users: state.usersPage.users,
         numberOfPages: state.usersPage.numberOfPages,
         numberOfUsers: state.usersPage.numberOfUsers,
         totalUsersCount: state.usersPage.totalUsersCount
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
      }
   }
}

const UsersContainer =  connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;