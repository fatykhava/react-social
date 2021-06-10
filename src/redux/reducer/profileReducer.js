const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (newPostText) =>
  ({type: UPDATE_NEW_POST_TEXT, newPostText: newPostText});

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: state.posts.length + 1,
        message: state.newPostText,
        avatar: 'https://i.ytimg.com/vi/XM4vQGcKEEo/maxresdefault.jpg',
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newPostText
      };
    default:
      return state;
  }
}

export default profileReducer;
