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
   switch(action.type){
      case ADD_POST: 
         let newPost = {
            id: Date.parse(new Date().toString()),
            user: 'User name',
            message: state.newPostText,
         }
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: '',
         }
      case NEW_POST: 
         return {
            ...state,
            newPostText: action.text,
         }
      default:
         return state;
   }
      
   // if (action.type === ADD_POST) {
   //    let newPost = {
   //       id: Date.parse(new Date().toString()),
   //       user: 'User name',
   //       message: stateCopy.newPostText,
   //    }
   //    stateCopy.posts.push(newPost)
   //    stateCopy.newPostText = ''
   // } else if (action.type === NEW_POST) {
   //    stateCopy.newPostText = action.text;
   // }

   //return stateCopy
}

export let actionCreatorAddPost = () => ({
   type: ADD_POST,
})
export let actionCreatorChangePost = (text) => ({
   type: NEW_POST,
   text: text,
})

export default PROFILE_REDUCER;