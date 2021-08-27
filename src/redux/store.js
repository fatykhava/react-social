import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import sidebarReducer from "./reducers/sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: 'Hi, how are you?',
          avatar: 'https://i.ytimg.com/vi/XM4vQGcKEEo/maxresdefault.jpg',
          likesCount: 5
        },
        {
          id: 2,
          message: 'It\'s my first post',
          avatar: 'https://i.insider.com/5d35bf63454a3947b349c915?width=1136&format=jpeg',
          likesCount: 23
        }
      ],
      newPostText: 'Your post',
    },
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: 'Ana',
          avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400'
        },
        {id: 2, name: 'Chloe', avatar: 'https://i.pinimg.com/originals/1e/a6/ce/1ea6cea6021ab93aa0ad45512e0a3e53.jpg'},
        {id: 3, name: 'Alex', avatar: 'https://www.nme.com/wp-content/uploads/2020/05/connell-chain.jpg'},
        {
          id: 4,
          name: 'Nick',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEpUUJVqlxCFXUdaSn7ieT0ucZkZGX1NlmBQ&usqp=CAU'
        },
        {
          id: 5,
          name: 'Mom',
          avatar: 'https://horizon-media.s3-eu-west-1.amazonaws.com/s3fs-public/field/image/meikebartels-sm.jpg'
        },
        {
          id: 6,
          name: 'Dad',
          avatar: 'https://i.cbc.ca/1.5927916.1614287216!/fileImage/httpImage/image.jpeg_gen/derivatives/16x9_780/walkie-charles.jpeg'
        }
      ],
      messages: [
        {id: 1, message: 'What`s up!'},
        {id: 2, message: 'Hi! How r u?'},
        {id: 3, message: 'Fine, thanks. And u?'},
        {id: 4, message: 'too...'}
      ],
      newTextMessage: 'Your message',
    },
    sidebar: {
      friends: [
        {
          id: 1,
          name: 'Ana',
          avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400'
        },
        {
          id: 2,
          name: 'Nick',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEpUUJVqlxCFXUdaSn7ieT0ucZkZGX1NlmBQ&usqp=CAU'
        },
        {
          id: 3,
          name: 'Mom',
          avatar: 'https://horizon-media.s3-eu-west-1.amazonaws.com/s3fs-public/field/image/meikebartels-sm.jpg'
        },
      ],
    },
  },
  _callSubscriber() {
    return true;
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

window.store = store;
export default store;
