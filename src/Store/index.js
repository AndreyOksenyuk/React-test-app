const ADD_POST = 'ADD-POST';
const NEW_POST = 'NEW-POST';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE'

let store = {
   _state: {
   profilePage: {
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
   },

   messagePage: {
 
      dialogs: [{
               id: 1,
               user: 'Andrey',
               avatar: 'https://yt3.ggpht.com/a/AATXAJyqgMlsfcgmkNqMvaQAY4leVcr888ItH7dvxg=s900-c-k-c0xffffffff-no-rj-mo',
            },
            {
               id: 2,
               user: 'Sergey',
               avatar: 'https://yt3.ggpht.com/a/AATXAJyqgMlsfcgmkNqMvaQAY4leVcr888ItH7dvxg=s900-c-k-c0xffffffff-no-rj-mo',
            },
            {
               id: 3,
               user: 'Dinis',
               avatar: 'https://yt3.ggpht.com/a/AATXAJyqgMlsfcgmkNqMvaQAY4leVcr888ItH7dvxg=s900-c-k-c0xffffffff-no-rj-mo',
            },
            {
               id: 4,
               user: 'Max',
               avatar: 'https://yt3.ggpht.com/a/AATXAJyqgMlsfcgmkNqMvaQAY4leVcr888ItH7dvxg=s900-c-k-c0xffffffff-no-rj-mo',
            },
            {
               id: 5,
               user: 'Habib',
               avatar: 'https://yt3.ggpht.com/a/AATXAJyqgMlsfcgmkNqMvaQAY4leVcr888ItH7dvxg=s900-c-k-c0xffffffff-no-rj-mo',
            },
            {
               id: 6,
               user: 'Dimon',
               avatar: 'https://yt3.ggpht.com/a/AATXAJyqgMlsfcgmkNqMvaQAY4leVcr888ItH7dvxg=s900-c-k-c0xffffffff-no-rj-mo',
            },
         ],

         addNewMessage: '',
         message: [{
               id: 1,
               message: 'Hello!!! It is my first message. How are you?'
            },
            {
               id: 2,
               message: 'Hello! i am ok)'
            },
            {
               id: 3,
               message: 'Hello!!!'
            },
            {
               id: 4,
               message: 'Bye!'
            },
         ],
      },
   newsPage: {
      news: 'NEWS state'
   }

   },
   getState() {
      return this._state;
   },  
   _callSubscriber () {
   
   },
   subscribe (observer) {
      this._callSubscriber = observer;
   },

   dispatch(action) {
      if (action.type === ADD_POST) {
         let newPost = {
            id: Date.parse(new Date().toString()),
            user: 'User name',
            message: this._state.profilePage.newPostText,
         }
         this._state.profilePage.posts.push(newPost)
         this._callSubscriber(this._state);
      }
      else if (action.type === NEW_POST) {
         this._state.profilePage.newPostText = action.text;
         this._callSubscriber(this._state);
      }

      else if (action.type === ADD_NEW_MESSAGE) {
         let message = {
            id: Date.parse(new Date().toString()),
            message: this._state.messagePage.addNewMessage
         }
         this._state.messagePage.message.push(message)
         this._callSubscriber(this._state);
      }
      else if (action.type === CHANGE_NEW_MESSAGE) {
         this._state.messagePage.addNewMessage = action.message;
         this._callSubscriber(this._state);
      }
   }
}

export let actionCreatorAddPost = () => ({type: ADD_POST,})
export let actionCreatorChangePost = (text) => ({
      type: NEW_POST,
      text: text,
   })

export let actionCreatorAddMessage = () => ({type: ADD_NEW_MESSAGE,})
export let actionCreatorChangeMessage = (message) => ({
      type: CHANGE_NEW_MESSAGE,
      message: message,
   })

      
   


export default store;






