let renderEntireTree = () => {
   console.log('rerender');
}

let state = {
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

};

export default state;

export function addPost() {
   let newPost = {
      id: Date.parse(new Date().toString()),
      user: 'User name',
      message: state.profilePage.newPostText,
   }
   state.profilePage.posts.push(newPost)
   renderEntireTree(state);
}

export function newPostFun(text) {
   state.profilePage.newPostText = text;
   renderEntireTree(state);
}

export const subscribe = (observer) => {
   renderEntireTree = observer;
}
