import { connect } from 'react-redux'
import Users from './Users'
import { actionsCreatorAddUserText, actionsCreatorFollow, actionsCreatorUnfollow, actionsCreatorSetUsers } from '../../Redux/users-reducer'


const mapStateToProps = (state) => { 
   return {
         text: state.usersPage.text,
         users: state.usersPage.users
   }
}

const mapDispatchToProps = (dispatch) =>{
   return {
      onClickUser: () => {
         dispatch(actionsCreatorAddUserText())
      },
      follow: (id) => {
         dispatch(actionsCreatorFollow(id))
      },
      unfollow: (id) => {
         dispatch(actionsCreatorUnfollow(id))
      },
      setUsers: (users) => {
         dispatch(actionsCreatorSetUsers(users))
      }
   }
}

const UsersContainer =  connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;