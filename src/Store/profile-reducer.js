const ADD_POST = 'ADD-POST';
const NEW_POST = 'NEW-POST';

let  PROFILE_REDUCER = (action, state) => {
   if (action.type === ADD_POST) {
      let newPost = {
         id: Date.parse(new Date().toString()),
         user: 'User name',
         message: state.newPostText,
      }
      state.posts.push(newPost)

   } else if (action.type === NEW_POST) {
      state.newPostText = action.text;
   }

   return state
}

export default PROFILE_REDUCER;