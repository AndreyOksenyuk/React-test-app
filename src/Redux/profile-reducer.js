const ADD_POST = 'ADD-POST';
const NEW_POST = 'NEW-POST';

let initialState = {
   newPostText: '',
      posts: [{
            id: 1,
            user: 'Andery',
            message: 'Hello how are you?'
         },
         {
            id: 2,
            user: 'Dimon',
            message: 'Hello! I am ok) And you?'
         },
         {
            id: 3,
            user: 'Ivan',
            message: 'My first posts...'
         },
         {
            id: 4,
            user: 'Ivan',
            message: 'Bye!'
         }
      ],
}

let  PROFILE_REDUCER = (state = initialState, action) => {
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

export let actionCreatorAddPost = () => ({
   type: ADD_POST,
})
export let actionCreatorChangePost = (text) => ({
   type: NEW_POST,
   text: text,
})

export default PROFILE_REDUCER;