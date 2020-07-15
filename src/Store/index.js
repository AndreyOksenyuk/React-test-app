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
   console.log(this.getState().profilePage.newPostText);
   },
   addPost() {
   let newPost = {
         id: Date.parse(new Date().toString()),
         user: 'User name',
         message: this._state.profilePage.newPostText,
      }
      this._state.profilePage.posts.push(newPost)
      this._callSubscriber(this._state);
   },
   newPostFun(text) {
      this._state.profilePage.newPostText = text;
      this._callSubscriber(this._state);
   },
   subscribe (observer) {
      this._callSubscriber = observer;
   },

}

export default store;






